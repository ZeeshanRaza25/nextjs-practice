import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Revenue,
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { formatCurrency } from './utils';
import dbConnect from './dbConnect';
import City from './models/cities';
import Author from './models/authors';
import Category from './models/category';
import Publisher from './models/publisher';

export async function fetchRevenue() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  noStore();
  try {
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  noStore();
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  noStore();
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  noStore();
  try {
    const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

let LIMIT = 10;
// Fetch all Cities
export async function fetchAllCities() {
  try {
    await dbConnect();

    const cities = await City.find();

    return cities;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cities.');
  }
}

export async function fetchFilteredCities(query: string, currentPage: number) {
  const offset = (currentPage - 1) * LIMIT;

  let queryObj: any = {};
  if (query) {
    queryObj.name = { $regex: query, $options: 'i' };
  }

  try {
    await dbConnect();

    const cities = await City.find(queryObj)
      .sort({
        createdAt: -1,
      })
      .limit(LIMIT)
      .skip(offset);

    return cities;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cities.');
  }
}

export async function fetchCityById(id: string) {
  noStore();
  try {
    await dbConnect();
    const city = await City.findById(id);
    return city;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch City.');
  }
}

export async function fetchCitiesPages(query: string) {
  noStore();
  try {
    let queryObj: any = {};
    if (query) {
      queryObj.name = { $regex: query, $options: 'i' };
    }

    await dbConnect();
    const count = await City.find(queryObj).countDocuments();
    const totalPages = Math.ceil(Number(count) / LIMIT);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of cities.');
  }
}

// Fetch all Authors
export async function fetchFilteredAuthors(query: string, currentPage: number) {
  const offset = (currentPage - 1) * LIMIT;

  let queryObj: any = {};
  if (query) {
    queryObj.name = { $regex: query, $options: 'i' };
  }

  try {
    await dbConnect();

    const data = await Author.find(queryObj)
      .sort({
        createdAt: -1,
      })
      .limit(LIMIT)
      .skip(offset);

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch authors.');
  }
}

export async function fetchAuthorById(id: string) {
  noStore();
  try {
    await dbConnect();
    const data = await Author.findById(id);
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Author.');
  }
}

export async function fetchAuthorsPages(query: string) {
  noStore();
  try {
    let queryObj: any = {};
    if (query) {
      queryObj.name = { $regex: query, $options: 'i' };
    }

    await dbConnect();
    const count = await Author.find(queryObj).countDocuments();
    const totalPages = Math.ceil(Number(count) / LIMIT);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of authors.');
  }
}

// Fetch all Categories
export async function fetchFilteredCategories(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * LIMIT;

  let queryObj: any = {};
  if (query) {
    queryObj.name = { $regex: query, $options: 'i' };
  }

  try {
    await dbConnect();

    const data = await Category.find(queryObj)
      .sort({
        createdAt: -1,
      })
      .limit(LIMIT)
      .skip(offset);

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}

export async function fetchCategoryById(id: string) {
  noStore();
  try {
    await dbConnect();
    const data = await Category.findById(id);
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Categories.');
  }
}

export async function fetchCategoriesPages(query: string) {
  noStore();
  try {
    let queryObj: any = {};
    if (query) {
      queryObj.name = { $regex: query, $options: 'i' };
    }

    await dbConnect();
    const count = await Category.find(queryObj).countDocuments();
    const totalPages = Math.ceil(Number(count) / LIMIT);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of Categories.');
  }
}

// Fetch all Publishers
export async function fetchFilteredPublishers(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * LIMIT;

  let queryObj: any = {};
  if (query) {
    queryObj.name = { $regex: query, $options: 'i' };
  }

  try {
    await dbConnect();

    const data = await Publisher.find(queryObj)
      .populate('city')
      .sort({
        createdAt: -1,
      })
      .limit(LIMIT)
      .skip(offset);
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch publishers.');
  }
}

export async function fetchPublisherById(id: string) {
  noStore();
  try {
    await dbConnect();
    let data1 = await Publisher.findById(id).lean(); // Use lean() to get a plain JavaScript object
    // console.log('data1', data1);
    // let dataPromise = Publisher.findById(id); // This returns a promise
    // console.log('dataPromise', dataPromise);
    // let data = await dataPromise; //
    // console.log('data', data);
    const { _id, name, city }: any = data1;
    return { _id, name, city };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch publishers.');
  }
}

export async function fetchPublishersPages(query: string) {
  noStore();
  try {
    let queryObj: any = {};
    if (query) {
      // if (queryObj.name) {
      //   queryObj.name = { $regex: query, $options: 'i' };
      // }
    }

    await dbConnect();
    const count = await Publisher.find(queryObj).countDocuments();
    const totalPages = Math.ceil(Number(count) / LIMIT);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of Publishers.');
  }
}

export async function fetchPublishers() {
  try {
    await dbConnect();
    const data = await Publisher.find();
    return data;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all publishers.');
  }
}

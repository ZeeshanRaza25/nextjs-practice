import Form from '@/app/ui/categories/edit-form';
import Breadcrumbs from '@/app/ui/common/breadcrumbs';
import { fetchCategoryById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata  = {
  title: 'Edit Category',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const [data] = await Promise.all([fetchCategoryById(id)]);

  if (!data) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Categories', href: '/dashboard/Categories' },
          {
            label: 'Edit Category',
            href: `/dashboard/Categories/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form data={data} />
    </main>
  );
}

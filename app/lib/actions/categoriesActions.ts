'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dbConnect from '../dbConnect';
import Category from '../models/category';

export type State = {
  errors?: {
    name?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  name: z
    .string({
      invalid_type_error: 'Please enter category name.',
    })
    .min(1, 'Please enter category name'),
});

const Create = FormSchema.omit({ id: true, date: true });
const Update = FormSchema.omit({ id: true, date: true });

export async function createCategory(prevState: State, formData: FormData) {
  const validatedFields = Create.safeParse({
    name: formData.get('name'),
  });
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Category.',
    };
  }

  const { name } = validatedFields.data;

  await dbConnect();

  let isExist = await Category.findOne({ name });
  if (isExist) {
    return {
      // errors: ['name'],
      message: 'Category already exist.',
    };
  }

  try {
    await dbConnect();
    await Category.create({ name });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Category.',
    };
  }
  revalidatePath('/dashboard/categories');
  redirect('/dashboard/categories');
}

export async function updateCategory(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = Update.safeParse({
    name: formData.get('name'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Categories',
    };
  }

  const { name } = validatedFields.data;

  try {
    await dbConnect();
    await Category.findByIdAndUpdate(id, { name });

    revalidatePath('/dashboard/categories');
    redirect('/dashboard/categories');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Category',
    };
  }
}

export async function deleteCategory(id: string) {
  try {
    await dbConnect();
    await Category.findByIdAndDelete(id);
    revalidatePath('/dashboard/categories');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Category.',
    };
  }
}

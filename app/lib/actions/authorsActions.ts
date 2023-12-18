'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dbConnect from '../dbConnect';
import Authors from '../models/authors';

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
      invalid_type_error: 'Please enter author name.',
    })
    .min(1, 'Please enter author name'),
});

const Create = FormSchema.omit({ id: true, date: true });
const Update = FormSchema.omit({ id: true, date: true });

export async function createAuthor(prevState: State, formData: FormData) {
  const validatedFields = Create.safeParse({
    name: formData.get('name'),
  });
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Author.',
    };
  }

  const { name } = validatedFields.data;

  await dbConnect();

  let isExist = await Authors.findOne({ name });
  if (isExist) {
    return {
      // errors: ['name'],
      message: 'Author already exist.',
    };
  }

  try {
    await dbConnect();
    await Authors.create({ name });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Author.',
    };
  }
  revalidatePath('/dashboard/authors');
  redirect('/dashboard/authors');
}

export async function updateAuthor(
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
      message: 'Missing Fields. Failed to Update Authors',
    };
  }

  const { name } = validatedFields.data;

  try {
    await dbConnect();
    await Authors.findByIdAndUpdate(id, { name });

    revalidatePath('/dashboard/authors');
    redirect('/dashboard/authors');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Authors',
    };
  }
}

export async function deleteAuthor(id: string) {
  try {
    await dbConnect();
    await Authors.findByIdAndDelete(id);
    revalidatePath('/dashboard/authors');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Author.',
    };
  }
}

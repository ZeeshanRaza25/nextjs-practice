'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dbConnect from '../dbConnect';
import Publisher from '../models/publisher';

export type State = {
  errors?: {
    name?: string[];
    city?: string[];
    _id?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  name: z
    .string({
      invalid_type_error: 'Please enter publisher name.',
    })
    .min(1, 'Please enter publisher name'),
  city: z
    .string({
      invalid_type_error: 'Please select city.',
    })
    .min(1, 'Please select city'),
});

const Create = FormSchema.omit({ id: true, date: true });
const Update = FormSchema.omit({ id: true, date: true });

export async function createPublisher(prevState: State, formData: FormData) {
  const validatedFields = Create.safeParse({
    name: formData.get('name'),
    city: formData.get('city'),
  });
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Publisher.',
    };
  }

  const { name, city } = validatedFields.data;

  await dbConnect();

  let isExist = await Publisher.findOne({ name, city });
  if (isExist) {
    return {
      // errors: ['name'],
      message: 'Publisher already exist.',
    };
  }

  try {
    await dbConnect();
    await Publisher.create({ name, city });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Publisher.',
    };
  }
  revalidatePath('/dashboard/publishers');
  redirect('/dashboard/publishers');
}

export async function updatePublisher(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = Update.safeParse({
    name: formData.get('name'),
    city: formData.get('city'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Publishers',
    };
  }

  const { name, city } = validatedFields.data;
  console.log('validatedFields.data', validatedFields.data)
  try {
    await dbConnect();
    const res = await Publisher.findByIdAndUpdate(id, { name, city });
    revalidatePath('/dashboard/publishers');
    redirect('/dashboard/publishers');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Publishers',
    };
  }
}

export async function deletePublisher(id: string) {
  try {
    await dbConnect();
    await Publisher.findByIdAndDelete(id);
    revalidatePath('/dashboard/publishers');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Publisher.',
    };
  }
}

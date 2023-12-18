'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dbConnect from '../dbConnect';
import City from '../models/cities';

export type CityState = {
  errors?: {
    name?: string[];
  };
  message?: string | null;
};

const CityFormSchema = z.object({
  id: z.string(),
  name: z
    .string({
      invalid_type_error: 'Please enter city name.',
    })
    .min(1, 'Please enter city name'),
});

const CreateCity = CityFormSchema.omit({ id: true, date: true });
const UpdateCity = CityFormSchema.omit({ id: true, date: true });

export async function createCity(prevState: CityState, formData: FormData) {
  const validatedFields = CreateCity.safeParse({
    name: formData.get('name'),
  });
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create City.',
    };
  }

  const { name } = validatedFields.data;

  await dbConnect();

  let isExist = await City.findOne({ name });
  if (isExist) {
    return {
      // errors: ['name'],
      message: 'City already exist.',
    };
  }

  try {
    await dbConnect();
    await City.create({ name });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create City.',
    };
  }
  revalidatePath('/dashboard/cities');
  redirect('/dashboard/cities');
}

export async function updateCity(
  id: string,
  prevState: CityState,
  formData: FormData,
) {
  const validatedFields = UpdateCity.safeParse({
    name: formData.get('name'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update City.',
    };
  }

  const { name } = validatedFields.data;

  try {
    await dbConnect();
    await City.findByIdAndUpdate(id, { name });

    revalidatePath('/dashboard/cities');
    redirect('/dashboard/cities');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update City.',
    };
  }
}

export async function deleteCity(id: string) {
  try {
    await dbConnect();
    await City.findByIdAndDelete(id);
    revalidatePath('/dashboard/cities');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete City.',
    };
  }
}

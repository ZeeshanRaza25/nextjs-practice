'use client';

import { City, Publisher } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updatePublisher } from '@/app/lib/actions/publishersActions';
import { useFormState } from 'react-dom';

export default function EditForm({
  data,
  cities,
}: {
  data: Publisher;
  cities: City[];
}) {
  const initialState = { message: null, errors: {} };
  const updatePublisherWithId = updatePublisher.bind(null, data._id);
  const [state, dispatch] = useFormState(updatePublisherWithId, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Publisher Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                defaultValue={data.name}
                placeholder="Enter Publisher Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="name-error"
              />
            </div>
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="mb-2 block text-sm font-medium">
            Select City
          </label>
          <div className="relative">
            <select
              id="city"
              name="city"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="city-error"
              defaultValue={data.city}
            >
              <option value="" disabled>
                Select a city
              </option>
              {cities.map((city) => (
                <option key={city._id} value={city._id}>
                  {city.name}
                </option>
              ))}
            </select>
            {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
          </div>
          <div id="city-error" aria-live="polite" aria-atomic="true">
            {state.errors?.city &&
              state.errors.city.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/publishers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Publisher</Button>
      </div>
    </form>
  );
}

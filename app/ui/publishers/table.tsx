import { UpdatePublisher, DeletePublisher } from '@/app/ui/publishers/buttons';
import { fetchFilteredPublishers } from '@/app/lib/data';

export default async function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const data = await fetchFilteredPublishers(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {data?.map((el) => (
              <div key={el._id} className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">{el.name}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">{el.city.name}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <UpdatePublisher id={el._id} />
                    <DeletePublisher id={el._id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Publisher Name
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  City
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.map((el) => (
                <tr
                  key={el._id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-6 py-3">{el.name}</td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {el.city.name}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-6">
                    <div className="flex justify-end gap-3">
                      <UpdatePublisher id={el._id} />
                      <DeletePublisher id={el._id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

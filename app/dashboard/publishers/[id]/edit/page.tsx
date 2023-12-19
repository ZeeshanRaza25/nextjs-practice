import Form from '@/app/ui/publishers/edit-form';
import Breadcrumbs from '@/app/ui/common/breadcrumbs';
import { fetchAllCities, fetchPublisherById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Publisher',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const [data, cities] = await Promise.all([
    fetchPublisherById(id),
    fetchAllCities(),
  ]);
  
  if (!data) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Publishers', href: '/dashboard/publishers' },
          {
            label: 'Edit Publisher',
            href: `/dashboard/publishers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form data={data} cities={cities} />
    </main>
  );
}

import Form from '@/app/ui/cities/edit-form';
import Breadcrumbs from '@/app/ui/common/breadcrumbs';
import { fetchCityById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit City',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const [data] = await Promise.all([fetchCityById(id)]);

  if (!data) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Cities', href: '/dashboard/cities' },
          {
            label: 'Edit City',
            href: `/dashboard/cities/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form data={data} />
    </main>
  );
}

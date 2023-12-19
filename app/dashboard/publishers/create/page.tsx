import { fetchAllCities } from '@/app/lib/data';
import Form from '@/app/ui/publishers/create-form';
import Breadcrumbs from '@/app/ui/common/breadcrumbs';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publisher Create',
};

export default async function Page() {
  const cities = await fetchAllCities();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Publishers', href: '/dashboard/publishers' },
          {
            label: 'Create Publisher',
            href: '/dashboard/publishers/create',
            active: true,
          },
        ]}
      />
      <Form cities={cities} />
    </main>
  );
}

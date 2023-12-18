import Form from '@/app/ui/cities/create-form';
import Breadcrumbs from '@/app/ui/common/breadcrumbs';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'City Create',
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Cities', href: '/dashboard/cities' },
          {
            label: 'Create City',
            href: '/dashboard/cities/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}

import Form from '@/app/ui/authors/create-form';
import Breadcrumbs from '@/app/ui/common/breadcrumbs';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Author Create',
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Authors', href: '/dashboard/authors' },
          {
            label: 'Create Author',
            href: '/dashboard/authors/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}

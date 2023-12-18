import Form from '@/app/ui/categories/create-form';
import Breadcrumbs from '@/app/ui/common/breadcrumbs';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Category Create',
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Categories', href: '/dashboard/categories' },
          {
            label: 'Create Category',
            href: '/dashboard/categories/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}

import Form from '@/app/ui/authors/edit-form';
import Breadcrumbs from '@/app/ui/common/breadcrumbs';
import { fetchAuthorById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Author',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const [data] = await Promise.all([fetchAuthorById(id)]);

  if (!data) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Authors', href: '/dashboard/authors' },
          {
            label: 'Edit Author',
            href: `/dashboard/authors/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form data={data} />
    </main>
  );
}

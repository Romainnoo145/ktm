import MainLayout from '@/components/layout/MainLayout';

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  return (
    <MainLayout>
      {/* Existing code will be added here */}
      <div>Service detail page for {params.id}</div>
    </MainLayout>
  );
} 
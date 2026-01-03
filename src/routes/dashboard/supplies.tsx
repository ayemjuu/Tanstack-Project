import SuppliesPage from '@/features/supplies/pages/SuppliesPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/supplies')({
  component: SuppliesPage,
});

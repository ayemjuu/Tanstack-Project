import { createBrowserRouter, redirect } from 'react-router-dom';
import DashboardPage from '../features/dashboard/pages/DashboardPage';
import DashboardLayout from '../layout/DashboardLayout';
import TransactionsPage from '@/features/transaction/page/TransactionPage';
import NotFoundPage from '@/features/NotFoundPage';
import SuppliesPage from '@/features/supplies/pages/SuppliesPage';

export const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      // { path: '/', element: <DashboardPage /> },
      {
        path: '/',
        loader: ({ request }) => {
          const url = new URL(request.url);

          const hasPage = url.searchParams.has('page');
          const hasSize = url.searchParams.has('size');

          if (!hasPage || !hasSize) {
            if (!hasPage) url.searchParams.set('page', '1');
            if (!hasSize) url.searchParams.set('size', '10');

            return redirect(url.pathname + url.search);
          }

          return null;
        },
        element: <DashboardPage />,
      },
      { path: '/transactions', element: <TransactionsPage /> },
      { path: '/supplies', element: <SuppliesPage /> },

      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

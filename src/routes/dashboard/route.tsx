//layout

import { Header } from '@/components/dashboardLayout/Header';
import { Sidebar } from '@/components/dashboardLayout/SideBar';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

function isAuthenticated() {
  return !!localStorage.getItem('token');
}

const navItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Transactions', to: '/dashboard/transactions' },
  { label: 'Supplies', to: '/dashboard/supplies' },
];

export const Route = createFileRoute('/dashboard')({
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({ to: '/login' });
    }
  },
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

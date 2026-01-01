import { Link, useNavigate, useRouterState } from '@tanstack/react-router';

const navItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Transactions', to: '/dashboard/transactions' },
  { label: 'Supplies', to: '/dashboard/supplies' },
];

export function Sidebar() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate({ to: '/login' });
  };

  return (
    <aside className="w-64 bg-white border-r">
      <div className="h-16 flex items-center px-6 font-semibold text-lg border-b">
        My Dashboard
      </div>

      <nav className="p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.to;

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`block rounded px-3 py-2 text-sm font-medium transition
                ${
                  isActive
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <button
        onClick={handleLogout}
        style={{
          marginTop: 12,
          padding: '8px 16px',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </aside>
  );
}

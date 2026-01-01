// import { Outlet, NavLink } from 'react-router-dom';

// const navItems = [
//   { label: 'Dashboard', to: '/' },
//   { label: 'Transactions', to: '/transactions' },
//   { label: 'Supplies', to: '/supplies' },
// ];

// export default function DashboardLayout() {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r">
//         <div className="h-16 flex items-center px-6 font-semibold text-lg border-b">
//           My Dashboard
//         </div>

//         <nav className="p-4 space-y-1">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               end
//               className={({ isActive }) =>
//                 `block rounded px-3 py-2 text-sm font-medium transition
//                  ${
//                    isActive
//                      ? 'bg-gray-900 text-white'
//                      : 'text-gray-700 hover:bg-gray-100'
//                  }`
//               }
//             >
//               {item.label}
//             </NavLink>
//           ))}
//         </nav>
//       </aside>

//       {/* Main */}
//       <div className="flex flex-col flex-1">
//         {/* Header */}
//         <header className="h-16 bg-white border-b flex items-center justify-between px-6">
//           <h1 className="text-lg font-semibold">Dashboard</h1>

//           <div className="flex items-center gap-4">
//             <span className="text-sm text-gray-600">Admin</span>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 overflow-y-auto p-6">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }

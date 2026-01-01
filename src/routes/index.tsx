import { createFileRoute, redirect } from '@tanstack/react-router';

function isAuthenticated() {
  return !!localStorage.getItem('token');
}
//determine if authenticated or not
export const Route = createFileRoute('/')({
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({ to: '/dashboard' });
    }

    throw redirect({ to: '/login' });
  },
});

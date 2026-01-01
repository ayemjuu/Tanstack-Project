import LoginPage from '@/features/auth/LoginPage';
import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router';

function isAuthenticated() {
  return !!localStorage.getItem('token');
}

export const Route = createFileRoute('/login')({
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({ to: '/dashboard' });
    }
  },
  component: LoginPage,
});

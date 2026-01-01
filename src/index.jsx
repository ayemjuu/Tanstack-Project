import React from 'react';
import ReactDOM from 'react-dom/client';
import QueryProvider from './utils/query-provider';
import { RouterProvider } from '@tanstack/react-router';
import './index.css';
import { router } from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  </React.StrictMode>,
);

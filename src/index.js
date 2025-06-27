import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ErrorPage from './pages/ErrorPage'; 
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // bu "/"
        element: <HomePage />,
      },
      {
        path: '/blogpage',
        element: <BlogPage />,
      },
      // Boshqa sahifalarni ham shu yerga qo‘shishing mumkin
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Account from "./pages/account.tsx";
import Banners from "./pages/banners.tsx";
import Brands from "./pages/brands.tsx";
import Categories from "./pages/categories.tsx";
import Dashboard from "./pages/dashboard.tsx";
import Invoices from "./pages/invoices.tsx";
import Login from "./pages/auth/login.tsx";
import Orders from "./pages/orders.tsx";
import Products from "./pages/products.tsx";
import Users from "./pages/users.tsx";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },

  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/account",
        element: <Account />,
      },
      {
        path: "/dashboard/banners",
        element: <Banners />,
      },
      {
        path: "/dashboard/brands",
        element: <Brands />,
      },
      {
        path: "/dashboard/categories",
        element: <Categories />,
      },
      {
        path: "/dashboard/invoices",
        element: <Invoices />,
      },
      {
        path: "/dashboard/orders",
        element: <Orders />,
      },
      {
        path: "/dashboard/products",
        element: <Products />,
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

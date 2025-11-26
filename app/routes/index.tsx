import { type RouteObject } from "react-router";

import Layout from "~/components/Layout";
import Home from "~/pages/Home";
import Product from "~/pages/Product";
import Cart from "~/pages/Cart";
import NotFound from "~/pages/NotFound";
import ErrorPage from "~/pages/ErrorPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "p/:pid",
        element: <Product />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

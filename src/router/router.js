import { createBrowserRouter, Outlet } from "react-router-dom";
import * as Pages from "../pages";
import { Header } from "../components";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <></> },
      { path: "/cargo", element: <Pages.CargoPage /> },
      { path: "/add-cargo", element: <></> },
      { path: "/login", element: <></> },
    ],
  },
]);

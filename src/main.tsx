// @ts-nocheck
import * as React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.tsx";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import AddCard from "./pages/AddCard.tsx";
import "./main.scss";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "addcard",
    element: <AddCard />,
  },
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);

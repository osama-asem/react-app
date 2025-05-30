import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import NextPage from "./NextPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./NotFound.tsx";

const router = createBrowserRouter([
  { path: "/react-app", element: <App /> },
  { path: "/react-app/next-page", element: <NextPage /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

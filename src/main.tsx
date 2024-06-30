import React from "react";
import ReactDOM from "react-dom/client";
import Home from ".";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Project from "./pages/project";
import Art from "./pages/art";
import Nier from "./pages/project-pages/ProjectNier";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/project/:projectId",
    element: <Nier />,
  },
  {
    path: "/art",
    element: <Art />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Nabla&display=swap');
    </style>

    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import Home from ".";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Project from "./pages/project";
import Nier from "./pages/project-pages/ProjectNier";
import Wridden from "./pages/project-pages/ProjectWridden";
import Contact from "./pages/Contact";
import Netflix from "./pages/project-pages/ProjectNetflix";
import Random from "./pages/project-pages/ProjectRandom";

const router = createBrowserRouter([
  {
    path: "/my-website/",
    element: <Home />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/project/hero-website",
    element: <Nier />,
  },
  {
    path: "/project/wridden",
    element: <Wridden />,
  },
  {
    path: "/project/netflix-clone",
    element: <Netflix />,
  },
  {
    path: "/project/random",
    element: <Random />,
  },
  {
    path: "/contact",
    element: <Contact />,
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

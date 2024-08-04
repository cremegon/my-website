import React from "react";
import ReactDOM from "react-dom/client";
import Home from ".";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Project from "./pages/project";
import Nier from "./pages/project-pages/ProjectNier";
import Wridden from "./pages/project-pages/ProjectWridden";
import Contact from "./pages/Contact";
import Netflix from "./pages/project-pages/ProjectNetflix";
import Random from "./pages/project-pages/ProjectRandom";
import Layout from "./Layout";
import ProjectHomeLayout from "./ProjectHomeLayout";
import Brainy from "./pages/project-pages/ProjectBrainy";
import UserPilot from "./pages/project-pages/ProjectPilot";
import Preppy from "./pages/project-pages/ProjectPreppy";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/">
      <Route index element={<Home />} />
      <Route element={<ProjectHomeLayout />} path="project">
        <Route index element={<Project />} />
        <Route element={<Wridden />} path="wridden" />
        <Route element={<Nier />} path="hero" />
        <Route element={<Netflix />} path="netflix-clone" />
        <Route element={<Random />} path="recursion" />
        <Route element={<Brainy />} path="brainy" />
        <Route element={<UserPilot />} path="pilot" />
        <Route element={<Preppy />} path="preppy"/>
      </Route>
      <Route element={<Contact />} path="contact" />
    </Route>
  ),
  { basename: "/my-website/" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

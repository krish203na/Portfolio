import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.tsx";
import Contact from "./components/Contact.tsx";
import Education from "./components/Education.tsx";
import Project from "./components/Project.tsx";
import Skill from "./components/Skill.tsx";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/portfolio/" element={<App />}>
        <Route path="/portfolio/home" element={<Home />} />
        <Route path="/portfolio/education" element={<Education />} />
        <Route path="/portfolio/skill" element={<Skill />} />
        <Route path="/portfolio/project" element={<Project />} />
        <Route path="/portfolio/contact" element={<Contact />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>
);

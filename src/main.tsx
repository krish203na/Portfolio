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

// <============================== Routes ====================================>

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/Portfolio/" element={<App />}>
        <Route path="/Portfolio/" element={<Home />} />
        <Route path="/Portfolio/education" element={<Education />} />
        <Route path="/Portfolio/skill" element={<Skill />} />
        <Route path="/Portfolio/project" element={<Project />} />
        <Route path="/Portfolio/contact" element={<Contact />} />
      </Route>
    </Route>
  )
);

// <============================== Routes ====================================>

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>
);

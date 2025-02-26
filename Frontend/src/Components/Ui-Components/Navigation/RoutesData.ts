// import TeamsPage from "../../Pages/TeamsPage/TeamsPage";
// import About from "../../Pages/About/About";
import NotFound from "../../Pages/NotFound/NotFound";
import { IRoute } from "../../../Helpers/Interfaces";
// import HomePage from "../../Pages/Home/HomePage";
import { nanoid } from "@reduxjs/toolkit";
import { lazy } from "react";

const HomePage = lazy(() => import("../../Pages/Home/HomePage"));
const About = lazy(() => import("../../Pages/About/About"));
const TeamsPage = lazy(() => import("../../Pages/TeamsPage/TeamsPage"));

const routesData: Array<IRoute> = [
  {
    id: nanoid(),
    path: "/",
    element: HomePage,
    linkText: "Home",
  },
  {
    id: nanoid(),
    path: "/TeamsPage",
    element: TeamsPage,
    linkText: "Teams",
  },
  { id: nanoid(), path: "/About", element: About, linkText: "About" },
  {
    id: nanoid(),
    path: "*",
    element: NotFound,
    linkText: "",
    invisible: true
  },
];

export default routesData;

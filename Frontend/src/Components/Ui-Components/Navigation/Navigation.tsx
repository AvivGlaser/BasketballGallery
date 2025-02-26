import React, { Suspense } from "react";
import { Route, Link, Routes } from "react-router-dom";
import routesData from "./RoutesData";
import { IRoute } from "../../../Helpers/Interfaces";
import { nanoid } from "@reduxjs/toolkit";
import "./Navigation.css";
import Time from "../Time/Time";
import Loader from "../Loader/Loader";

export default function Navigation() {
  return (
    <nav>
      <Time />
      {routesData
        .filter((route: IRoute) => !route.invisible)
        .map((route: IRoute) => (
          <Link
            key={route.id}
            to={route.path}
            className={`${route.linkText}Nav`}
          >
            {route.linkText}
          </Link>
        ))}
      <Suspense fallback={<Loader />}>
        <Routes>
          {routesData.map((route: IRoute) => (
            <Route
              key={route.id}
              path={route.path}
              element={<route.element />}
              id={nanoid()}
            />
          ))}
        </Routes>
      </Suspense>
    </nav>
  );
}

import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import React, { lazy } from "react";

const Films = lazy(() => import('./pages/Films'));
const Favoris = lazy(() => import("./pages/Favoris"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Films />
      },
      {
        path: "/favoris",
        element: <Favoris />
      },
    ]
  }
]);
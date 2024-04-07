import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import CountryPage from "./pages/CountryPage";
import { fetchReports } from "./services/fetchReports";
import MapPage from "./pages/MapPage";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MapPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "country/:isoCode/:date?",
    element: <CountryPage />,
    loader: async ({ request, params }) => {
      return fetchReports(params.isoCode, params.date);
    },
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>,
);

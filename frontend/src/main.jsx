import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./router/Root";
import Create from "./router/Create";
import ErrorPage from "./ErrorPage";
import createAction from "./actions/createAction";
import loadNote from "./loader/loadNote";
import loadNotes from "./loader/loadNotes";
import Edit from "./router/Edit";
import View from "./router/View";
import Index from "./router/Index";
import editAction from "./actions/editAction";
import deleteAction from "./router/delete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: loadNotes,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "/create",
            action: createAction,
            element: <Create />,
          },
          { path: "/:id", loader: loadNote, element: <View /> },
          {
            path: "/:id/edit",
            loader: loadNote,
            action: editAction,
            element: <Edit />,
          },
          {
            path: "/:id/delete",
            action: deleteAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

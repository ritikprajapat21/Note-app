import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./router/Root";
import Create from "./router/Create";
import createAction from "./actions/createAction";
import loadNote from "./loader/loadNote";
import Edit from "./router/Edit";
import View from "./router/View";
import editAction from "./actions/editAction";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/create", action: createAction, element: <Create /> },
        { path: "/:id", loader: loadNote, element: <View /> },
        {
          path: "/:id/edit",
          loader: loadNote,
          action: editAction,
          element: <Edit />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

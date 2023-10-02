import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Profile from "./Profile";
import Messages from "./Messages";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/profile/:name",
      element: <Profile />,
    },
    {
      path: "/messages",
      element: <Messages />,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

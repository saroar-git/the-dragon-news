import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/news/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
    ],
  },

  {
    path: "/category",
    element: <Main />,
    children: [
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-saroar-git.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },

  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-saroar-git.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;

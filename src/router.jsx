import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import NewPage from "./pages/new";
import CategorysPage from "./pages/categorys";
import PostPage from "./pages/post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "new",
        element: <NewPage />,
      },
      {
        path: "categorys/:slug",
        element: <CategorysPage />,
      },
      {
        path: "posts/:id",
        element: <PostPage />,
      },
    ],
  },
]);

export default router;

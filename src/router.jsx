import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import NewPage from "./pages/new";
import CategorysPage from "./pages/categorys";
import PostPage from "./pages/post";
import MyPostsPage from "./pages/my-posts";
import AuthProvider from "./providers/AuthProvider";
import CreatePostPage from "./pages/create-post";
import OrdersPage from "./pages/orders";

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
      {
        path: "my-posts",
        element: (
          <AuthProvider>
            <MyPostsPage />
          </AuthProvider>
        ),
      },
      {
        path: "create-post",
        element: (
          <AuthProvider>
            <CreatePostPage />
          </AuthProvider>
        ),
      },
      {
        path: "orders",
        element: (
          <AuthProvider>
            <OrdersPage />
          </AuthProvider>
        ),
      },
    ],
  },
]);

export default router;

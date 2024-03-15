import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import NewPage from "./pages/new";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "new",
        element: <NewPage />,
      },
    ],
  },
]);

export default router;

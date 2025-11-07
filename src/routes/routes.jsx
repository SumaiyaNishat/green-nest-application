import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            index: true,
            element:<Home></Home>,
        },
        {
            path:"/plants",
            element:<Plants></Plants>,
        },
        {
            path:"/myProfile",
            element:<MyProfile></MyProfile>
        }
    ]
  },
]);
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthLayout from "../layout/AuthLayout";
import PlantDetails from "../pages/PlantDetails";


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
            loader: () => fetch("/plants.json").then(res => res.json()),   
        },
        {
          path:"/plants/:plantId",
            element:<PlantDetails></PlantDetails>,
            
        },
        {
            path:"/myProfile",
            element:<MyProfile></MyProfile>
        },
        
    ]
  },
  {
    path:"/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
        {
          path: "/auth/login",
          element: <Login></Login>,
        },
        {
          path: "/auth/register",
          element: <Signup></Signup>,
        },
      
    ]
  }
]);
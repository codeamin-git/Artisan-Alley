import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Home from "../../layouts/Home/Home";
import AddCraftItem from "../../Pages/AddCraftItem";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: '/addCraftItem',
          element: <AddCraftItem></AddCraftItem>
        }
      ]
    },
    
  ]);

export default router;
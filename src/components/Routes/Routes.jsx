import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Home from "../../layouts/Home/Home";
import AddCraftItem from "../../Pages/AddCraftItem";
import ViewDetails from "../../Pages/ViewDetails";
import Error from "../../Pages/Error";
import PrivateRoutes from "../../privateRoutes/PrivateRoutes";
import MyArtCraftList from "../../Pages/MyArtCraftList";
import AllArtCraftItems from "../../Pages/AllArtCraftItems";
import Update from "../../Pages/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
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
          element: <PrivateRoutes><AddCraftItem></AddCraftItem></PrivateRoutes>
        },
        {
          path: '/allArtCraftItems',
          element: <AllArtCraftItems></AllArtCraftItems>
        },
        {
          path: '/myList',
          element: <PrivateRoutes><MyArtCraftList></MyArtCraftList></PrivateRoutes>
        },
        {
          path: '/update/:id',
          element: <PrivateRoutes><Update></Update></PrivateRoutes>
        },
        {
          path: '/viewDetails/:id',
          element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/getCrafts/${params.id}`)
        }
      ]
    },
    
  ]);

export default router;
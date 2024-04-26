
import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Root from "../layout/Root";
import MyArtCraft from "../pages/MyArtCraft";
import AllArtCraft from "../pages/AllArtCraft";
import AddCraft from "../pages/AddCraft";
import CartView from "../components/CartView";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allArt',
            element:<AllArtCraft></AllArtCraft>
        },
        {
            path:'/addCraft',
            element:<AddCraft></AddCraft>
        },
        {
            path:'/myArtCraft',
            element:<MyArtCraft></MyArtCraft>
        },
        {
          path:'/cartView/:_id',
          element:<CartView></CartView>
        }
      ]
    },
  ]);

export default router;
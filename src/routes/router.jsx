
import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Root from "../layout/Root";
import MyArtCraft from "../pages/MyArtCraft";
import AllArtCraft from "../pages/AllArtCraft";
import AddCraft from "../pages/AddCraft";
import CartView from "../components/CartView";
import AllArtView from "../components/AllArtView";
import Login from "../pages/Login";
import Register from "../pages/Register";


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
            element:<AllArtCraft></AllArtCraft>,
            loader:()=> fetch('http://localhost:5000/addCraft')
        },
        {
            path:'/addCraft',
            element:<AddCraft></AddCraft>,
        },
        {
            path:'/myArtCraft',
            element:<MyArtCraft></MyArtCraft>,
            loader:()=> fetch('http://localhost:5000/addCraft')
        },
        {
          path:'/allArtView/:id',
          element:<AllArtView></AllArtView>,
          loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path:'/cartView/:id',
          element:<CartView></CartView>,
          loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);

export default router;
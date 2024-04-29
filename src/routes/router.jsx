
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
import CartUpdated from "../components/CartUpdated";
import Privateroute from "./Privateroute";
import Subcategory from "../components/Subcategory";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch("http://localhost:5000/addCraft")
        },
        {
            path:'/allArt',
            element:<AllArtCraft></AllArtCraft>,
            loader:()=> fetch('http://localhost:5000/addCraft')
        },
        {
            path:'/addCraft',
            element:<Privateroute><AddCraft></AddCraft></Privateroute>,
        },
        {
            path:'/myArtCraft',
            element:<Privateroute><MyArtCraft></MyArtCraft></Privateroute>,
            loader:()=> fetch('http://localhost:5000/addCraft')
        },
        {
          path:'/cartUpdated/:id',
          element:<Privateroute><CartUpdated></CartUpdated></Privateroute>,
          loader: ({params}) => fetch(`http://localhost:5000/addCraft/${params.id}`)
        },
        {
          path:'/craft/:id',
          element:<Privateroute><AllArtView></AllArtView></Privateroute>,
          loader: ({params})=> fetch(`http://localhost:5000/craft/${params.id}`)
        },
        {
          path:'/cartView/:id',
          element:<CartView></CartView>,
          loader: ({params})=> fetch(`http://localhost:5000/addCraft/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/subcategory',
          element:<Subcategory></Subcategory>,
          loader:()=> fetch('http://localhost:5000/subcategory')
        }
      ]
    },
  ]);

export default router;
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../home/Home";
import Login from "../Auth/Login";
import Registration from './../Auth/Registration';
import ExploreArtworks from "../pages/explore artworks/ExploreArtworks";
import AddArtWorks from "../pages/AddArtWorks/AddArtWorks";
import MyGallery from "../pages/MyGallery/MyGallery";
import MyFavorites from "../pages/MyFavorites/MyFavorites";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/notfound/NotFound";
import ExplorerDetails from "../pages/explorerDetails/ExplorerDetails";



export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
      {
        path:"/",
        element:<Home></Home>,
                
      },
      {
        path:"/exploreArtworks",
        element:<ExploreArtworks></ExploreArtworks>,
        loader: () => fetch('http://localhost:5000/arts'),
      },
       {
        path:"/addArtworks",
        element:<PrivateRoute>
            <AddArtWorks>
            </AddArtWorks>
            </PrivateRoute>,
      },
       {
        path:"/myGallery",
        element:<PrivateRoute>
            <MyGallery>
            </MyGallery>
        </PrivateRoute>,
      },
       {
        path:"/myFavorites/:id",
        element:<PrivateRoute>
            <MyFavorites>
            </MyFavorites>
        </PrivateRoute>,
         loader: ({params}) => fetch(`http://localhost:5000/arts/${params.id}`)
      },
      {
        path:"/explorer-details/:id",
        element: <PrivateRoute>
            <ExplorerDetails>
            </ExplorerDetails>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/arts/${params.id}`)
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Registration></Registration>,
      },
     
        ],
       
    }
    ,
      {
      path:"*",
      element:<NotFound></NotFound>
     },
])
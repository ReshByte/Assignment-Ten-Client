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
        element:<ExploreArtworks></ExploreArtworks>
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
        path:"/myFavorites",
        element:<PrivateRoute>
            <MyFavorites>
            </MyFavorites>
        </PrivateRoute>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Registration></Registration>,
      },
        ]
    }
])
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../home/Home";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
import ExploreArtworks from "../pages/explore artworks/ExploreArtworks";
import AddArtWorks from "../pages/AddArtWorks/AddArtWorks";
import MyGallery from "../pages/MyGallery/MyGallery";
import MyFavorites from "../pages/MyFavorites/MyFavorites";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/notfound/NotFound";
import ExplorerDetails from "../pages/explorerDetails/ExplorerDetails";
import Loading from "../home/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://assignment-ten-server-ten-theta.vercel.app/arts/latest"),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "/exploreArtworks",
        element: <ExploreArtworks></ExploreArtworks>,
        loader: () => fetch("https://assignment-ten-server-ten-theta.vercel.app/arts"),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "/addArtworks",
        element: (
          <PrivateRoute>
            <AddArtWorks></AddArtWorks>
          </PrivateRoute>
        ),
      },
      {
        path: "/myGallery",
        element: (
          <PrivateRoute>
            <MyGallery></MyGallery>
          </PrivateRoute>
        ),
      },
      {
        path: "/myFavorites",
        element: (
          <PrivateRoute>
            <MyFavorites></MyFavorites>
          </PrivateRoute>
        ),
        loader: () => fetch("https://assignment-ten-server-ten-theta.vercel.app/favorites"),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "/explorer-details/:id",
        element: (
          <PrivateRoute>
            <ExplorerDetails></ExplorerDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-ten-server-ten-theta.vercel.app/arts/${params.id}`),
        hydrateFallbackElement:<Loading></Loading>
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
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

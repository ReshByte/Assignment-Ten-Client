import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";
import Loading from "../home/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <Loading></Loading>
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;

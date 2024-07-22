import { Navigate, Outlet } from "react-router-dom";
import { useSpinner } from "../hooks/useSpinner";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  isLoading: boolean;
  children?: React.ReactNode;
  redirectTo?: string;
}

export const ProtectedRoute = ({
  isAuthenticated,
  isLoading,
  children,
  redirectTo = "/",
}: ProtectedRouteProps) => {
  // console.log("protected route", isAuthenticated);
  const { Spinner } = useSpinner(true);

  if (isLoading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace={true} />;
  }

  return children ? <>{children}</> : <Outlet />;
};

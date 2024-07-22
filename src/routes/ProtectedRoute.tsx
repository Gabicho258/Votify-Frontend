import { Navigate, Outlet } from "react-router-dom";

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
  console.log("protected route", isAuthenticated);

  if (isLoading) {
    return <div>Loading...</div>; // Puedes personalizar esto según tu necesidad
  }

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace={true} />;
  }

  return children ? <>{children}</> : <Outlet />;
};

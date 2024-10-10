import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  console.log("PrivateRoute isAuthenticated", isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
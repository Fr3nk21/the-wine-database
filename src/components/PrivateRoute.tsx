import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../services/auth';
import { Children } from 'react';

const PrivateRoute = ({ children }) => {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    // Redirect them to the /login page, but save the current location they were trying to go to when they were redirected. Thiss allows to send the user along to that page after they login, which is a nicer user experience than dropping them off on the home page.

    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;

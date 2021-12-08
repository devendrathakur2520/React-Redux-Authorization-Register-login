import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector} from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token=localStorage.getItem('token');
  console.log("sdhdsfdslkdsjfdlsjf",token)
  return (
    <Route
      {...rest}
      render={props => (token ? <Component {...props} /> : <Redirect to="/LoginForm" />)}
    />
  );
};

export default PrivateRoute;
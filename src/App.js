
import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { Dashboard } from "./components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


function App() {

  return (
    <>
      <div>
        <Router>
          <div>

            {!localStorage.getItem('token') ?
              <>
                <Link to="/RegistrationForm">RegistrationForm</Link>
                <Link to="/LoginForm">LogIn</Link>
              </> : ""
            }
            <Switch>
              <PublicRoute exact path="/RegistrationForm" component={RegistrationForm} />
              <PublicRoute path="/LoginForm" component={LoginForm} />
              <PrivateRoute exact path="/Dashboard" component={Dashboard} />
            </Switch>

          </div>
        </Router>
      </div>

    </>
  );
}

export default App;

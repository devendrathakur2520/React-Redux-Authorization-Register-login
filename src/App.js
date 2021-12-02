
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



function App() {
  return (
    <>
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/RegistrationForm">RegistrationForm</Link>
                </li>

              </ul>
            </nav>

            <Switch>
              <Route path="/RegistrationForm">
                <RegistrationForm />
              </Route>
              <Route path="/LoginForm">
                <LoginForm />
              </Route>
              <Route path="/Dashboard">
                <Dashboard />
              </Route>
            </Switch>

          </div>
        </Router>
      </div>

    </>
  );
}

export default App;

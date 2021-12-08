import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Products } from "../components/Products";
import { Location } from "../components/Location";
import { Families } from "../components/Families";
import { Transaction } from "../components/Transaction";
import Button from "@restart/ui/esm/Button";
import { useHistory } from "react-router";
export const Dashboard = () => {
    const history = useHistory();

    const LogOut = () => {
        localStorage.removeItem('token')
        history.push('/RegistrationForm')
    }

    return (
        <>
            <div>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/Products" >Products</Link>
                                </li>
                                <li>
                                    <Link to="/Location">Locations</Link>
                                </li>
                                <li>
                                    <Link to="/Families">Families</Link>
                                </li>
                                <li>
                                    <Link to="/Transaction">Transactions</Link>
                                </li>
                            </ul>
                        </nav>

                        <Switch>
                            <Route path="/Products">
                                <Products />
                            </Route>
                            <Route path="/Location">
                                <Location />
                            </Route>
                            <Route path="/Families">
                                <Families />
                            </Route>
                            <Route path="/Transaction">
                                <Transaction />
                            </Route>
                        </Switch>

                    </div>
                </Router>
            </div>
            <Button className="btn btn-primary" onClick={LogOut}  >LogOut</Button>

        </>
    )
}
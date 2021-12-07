import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Products} from "../components/Products";
import {Location} from "../components/Location";
import {Families} from "../components/Families";
import {Transaction} from "../components/Transaction";

export const Dashboard = () => {



    return (<>
      
        <div>
            <p className="text-left"><Link className="btn btn-primary" to="RegistrationForm"  >LogOut</Link></p>
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
                            <Products/>
                        </Route>
                        <Route path="/Location">
                            <Location/>
                        </Route>
                        <Route path="/Families">
                            <Families/>
                        </Route>
                        <Route path="/Transaction">
                            <Transaction/>
                        </Route>
                    </Switch>

                </div>
            </Router>
        </div>
    </>
    )
}
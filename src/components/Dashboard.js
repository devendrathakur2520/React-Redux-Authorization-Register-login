import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const Dashboard = () => {



    return (<>
        <h1>Dashboard</h1>
        <div>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Products</Link>
                            </li>
                            <li>
                                <Link to="/">Locations</Link>
                            </li>
                            <li>
                                <Link to="/">Families</Link>
                            </li>
                            <li>
                                <Link to="/">Transactions</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/">

                        </Route>
                        <Route path="/">

                        </Route>
                        <Route path="/">

                        </Route>
                    </Switch>

                </div>
            </Router>
        </div>
    </>
    )
}
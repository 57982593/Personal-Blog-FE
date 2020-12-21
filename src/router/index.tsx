import React from "react";
import Home from "../home/home";
import About from "../other/about";
import Dashboard from "../other/Dashboard";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home}>
                    {/*<Route path="/about">*/}
                    {/*    <About/>*/}
                    {/*</Route>*/}
                    {/*<Route path="/dashboard" component={Dashboard}/>*/}
                </Route>
            </Switch>
        </Router>
    );
}
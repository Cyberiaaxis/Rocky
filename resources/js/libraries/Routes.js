import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../pages/App";
// import Login from "../components/Login";
import Dashboard from "../pages/Dashboard";
import Attack from "../pages/Attack";
// import Chat from "../components/Chat";
import Login from "../components/Login";

const routes = (
    <Route exact path="/" component={App}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="/home">
                    <App />
                </Route>
                <Route path="/about">
                    <App />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/attack">
                    <Attack />
                </Route>
                {/* <Route path="/chat" component={Chat} /> */}
            </Switch>
        </Router>
    </Route>
);

export default routes;

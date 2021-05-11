import { BrowserRouter , Switch, Route } from "react-router-dom";
// import Login from "../components/Login";
import Dashboard from "../pages/Dashboard";
import Attack from "../pages/Attack";
import App from "../pages/App";
// import Chat from "../components/Chat";
import Login from "../components/Login";


const routes = (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true}>
            <App />
        </Route>
        <Route path="/login">
            // <Login />
        </Route>
        <Route path="/dashboard">
            // <Dashboard />
        </Route>
        <Route path="/attack">
            // <Attack />
        </Route>
        {/* <Route path="/chat" component={Chat} /> */}
    </Switch>
</BrowserRouter>
);

export default routes;

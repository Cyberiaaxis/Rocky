import {useState, useMemo} from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import Dashboard from "../pages/Dashboard";
import Attack from "../pages/Attack";
import App from "../pages/App";
// import Chat from "../components/Chat";
import Login from "../components/LoginForm";

const Routes = () => {
    const [user, setUser] = useState(null);
    const values = useMemo(() => ({ user, setUser }), [user, setUser]);
    console.log(user);
    return (<>
        <BrowserRouter>
        <AuthContext.Provider value={values}>
            <Switch>
                <Route path="/" exact={true}>
                <App />
                     {<App/>}
                </Route>
                <Route path="/dashboard">
                     {<Dashboard/>}
                </Route>
                <Route path="/attack">
                    {/* <Attack /> */}
                </Route>
                {/* <Route path="/chat" component={Chat} /> */}
            </Switch>
            </AuthContext.Provider>
        </BrowserRouter>
    </>);

};

export default Routes;

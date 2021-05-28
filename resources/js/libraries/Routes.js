import {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Attack from "../pages/Attack";
import App from "../pages/App";
// import Chat from "../components/Chat";
import Login from "../components/LoginForm";
// localStorage.clear();
const Routes = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userId, setUserId] = useState({});
    const [accessToken, setAccessToken] = useState({});

    useEffect(() => {
        function checkUserData() {
            const userDetails = localStorage.getItem('userDetails');
            console.log(userDetails);
            if(userDetails){
                const {userId, accessToken, loggedIn} = JSON.parse(userDetails);
                setLoggedIn(loggedIn);
                setUserId(userId);
                setAccessToken(accessToken);
            };      
      }
      checkUserData();
    }, [])

    console.log(loggedIn);

    return (<>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}>
                {/* <App /> */}
                 {loggedIn ? <Dashboard id={userId} />   : <App/>}
                </Route>
                <Route path="/dashboard">
                {/* <Dashboard /> */}
                    {loggedIn ? <Dashboard id={userId} /> : <App />}
                </Route>
                <Route path="/attack">
                    {/* <Attack /> */}
                </Route>
                {/* <Route path="/chat" component={Chat} /> */}
            </Switch>
        </BrowserRouter>
    </>);

};

export default Routes;

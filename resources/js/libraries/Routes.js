import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Attack from "../pages/Attack";
import App from "../pages/App";
// import Chat from "../components/Chat";
import Login from "../components/LoginForm";
import create from 'zustand'

const loginStatus = () => {
    const { userId, access_token } = localStorage.getItem('userDetails');
    let loginStatus = true;

    if (!access_token) {
        localStorage.removeItem('userDetails');
        loginStatus = false;
    }

    return { isLogged: loginStatus, userId: userId };
}

const useStore = create(set => ({
    userId: () => set((state) => ({ userId: loginStatus().userId })),
    isLoggedIn: () => set((state) => ({ isLoggedIn: loginStatus().isLogged })),
}));


const Routes = () => {
    const { userId, isLoggedIn } = useStore();

    return (<>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}>
                    <App />
                </Route>
                <Route path="/dashboard">
                    {isLoggedIn ? <Dashboard id={userId} /> : <Redirect to="/login" />}
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

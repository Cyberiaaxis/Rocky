import { BrowserRouter , Switch, Route } from "react-router-dom";
// import Login from "../components/Login";
import Dashboard from "../pages/Dashboard";
import Attack from "../pages/Attack";
import App from "../pages/App";
// import Chat from "../components/Chat";
import Login from "../components/LoginForm";
import useStore from 'zustand'

const {userId, access_token} = localStorage.getItem('userDetails');

if(access_token){
    let isLoggedIn = true;
}else{
    localStorage.setItem('userDetails', null);
    let isLoggedIn = false;
    history.push('/login');
}

// const useStore = create(set => ({
//     status: () => set((state) => ({ user: result.user, isLoggedIn: true })),
//   }))

const routes = (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true}>
            <App />
        </Route>
        <Route path="/login">
             <Login />
        </Route>
        <Route path="/dashboard">
             <Dashboard />
        </Route>
        <Route path="/attack">
             {/* <Attack /> */}
        </Route>
        {/* <Route path="/chat" component={Chat} /> */}
    </Switch>
</BrowserRouter>
);

export default routes;

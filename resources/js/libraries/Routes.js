import React, {useState, useMemo, useContext, useReducer} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Outlet,
    Route,
    Link
  } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import Dashboard from "../pages/Dashboard";
import Attack from "../pages/Attack";
import App from "../pages/App";
// import Chat from "../components/Chat";
import AuthenticationGuard from "../libraries/AuthenticationGuard";

const UserRoutes = () => {
  const [user, setUser] = useState(null);
  const values = useMemo(() => ({ user, setUser }), [user, setUser]);
  // console.log(user);
  return (
    <Router>
        <AuthContext.Provider value={values}>
        <Routes>
          <Route path="/" element={<App />}/>
        </Routes>

          <AuthenticationGuard>
            <Routes>
              <Route path="/" element={<App />}/>
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </AuthenticationGuard>
        </AuthContext.Provider>
    </Router>
  );
};
export default UserRoutes;
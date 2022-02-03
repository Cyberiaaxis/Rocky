import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../libraries/AuthContext";
import Fetch from "../libraries/Fetch";

const AuthenticationGuard = () => {
    const Navigate = useNavigate(); 
    const { user, setUser } = useContext(AuthContext);
    const  [isAuthenicated, setisAuthenicated]  = useState(false);
    useEffect(() => {
        async function getUserBySession() {
            if (user === null) {
                const result = await Fetch("home", { method: "get" });
                // if(result.message !== "Unauthenticated."){
                //     setisAuthenicated(true);
                // }
                console.log(result.message !== "Unauthenticated.");
                // setUser(result);
            }
            console.log(user);
        }
      getUserBySession();
    }, []);
    return (<p>hi</p>); 
};

// {(user === null) &&  <Navigate to="/login" /> }
export default AuthenticationGuard;

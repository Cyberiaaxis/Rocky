import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../libraries/AuthContext";
import Http from "../libraries/Http";

const AuthenticationGuard = () => {
    const Navigate = useNavigate(); 
    const { user, setUser } = useContext(AuthContext);
    const  [isAuthenicated, setisAuthenicated]  = useState(false);
    // useEffect(() => {
    //     function getUserBySession() {
    //             const result = Http("home", { method: "get" });
    //             if(result.message !== "Unauthenticated."){
    //                 setisAuthenicated(true);
    //             }
    //             console.log(result.message !== "Unauthenticated.");
    //             // setUser(result);
    //         console.log(user);
    //     }
    //   getUserBySession();
    // }, []);
    return (<p>hi</p>); 
};

// {(user === null) &&  <Navigate to="/login" /> }
export default AuthenticationGuard;

import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../libraries/AuthContext";
import Fetch from "../libraries/Fetch";

const AuthenticationGuard = () => {
    const { user, setUser } = useContext(AuthContext);
    console.log("AuthenticationGuard-user before");
    console.log(user);

    useEffect(() => {
        async function getUserBySession() {
            if (!user) {
                console.log("AuthenticationGuard-user in !user");
                console.log(user);
                const result = await Fetch("loginBySession", { method: "get" });
                console.log("AuthenticationGuard-user result");
                console.log(result);                
                // setUser(result);
            }
        }
      getUserBySession();
    }, []);
console.log("AuthenticationGuard-user after");
console.log(user);
    return <div>{JSON.stringify(user)}</div>;
};

export default AuthenticationGuard;

import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../libraries/AuthContext";
import Fetch from "../libraries/Fetch";

const AuthenticationGuard = () => {
    const { user, setUser } = useContext(AuthContext);
    useEffect(() => {
        async function getUserBySession() {
            if (user === null) {
                const result = await Fetch("home", { method: "get" });
                setUser(result);
            }
        }
      getUserBySession();
    }, []);
    return <div>{JSON.stringify(user)}</div>;
};

export default AuthenticationGuard;

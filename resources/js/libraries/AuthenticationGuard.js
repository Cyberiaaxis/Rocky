import { useContext } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from "../libraries/AuthContext";


const AuthenticationGuard = () => {
    const { user, setUser } = useContext(AuthContext);
    console.log("AuthenticationGuard");
    
    return <div>hi</div>;

}

export default AuthenticationGuard;
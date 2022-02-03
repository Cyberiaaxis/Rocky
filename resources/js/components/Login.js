import { useState, useEffect, useContext } from "react";
import "../styles/LoginForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import Fetch from "../libraries/Fetch";
import Model from "./Model";
import RegistrationForm from "./RegistrationForm";
import ForgetPassword from "./ForgetPassword";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../libraries/AuthContext";
// import { ModalContext } from "../libraries/ModalContext";

const Login = () => {
    const { user, setUser } = useContext(AuthContext);
    // const [modalState, setModalState] = useState({modal: '', opened: false});    
    const [registrationModal, setRegistrationModal] = useState(false);
    const [forgetModal, setForgetModal] = useState(false);
    const handleOK = (event) => {
        console.log(event);
    };

    const {
        register,
        setError,
        formState: { errors },
        handleSubmit,
        clearErrors,
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        
        const result = await Fetch("auth/login", { method: "post", data });

        if (result.user) {
            const userDetails = {
                userId: result.user.id,
                accessToken: result.access_token,
                loggedIn: true,
            };
            setUser(userDetails);
            navigate("/dashboard");
        } else {
            for (const [fieldName, errors] of Object.entries(result.errors)) {
                setError(fieldName, {
                    type: "manual",
                    message: errors[0],
                });
            }

            setTimeout(() => {
                clearErrors();
            }, 5000);
        }
    };

    return (
        <>
            <div>
                <span className="top" onClick={() => {
                    setForgetModal(true);
                    setRegistrationModal(false);
                    // setModal(forgetModal);
                 }}>
                    Recover Account
                </span>

                <form className="form-inline" method="post" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="form-addon">
                                <FontAwesomeIcon icon={faUser} color="#63102f" size="xs" />
                            </span>

                            <input type="email" placeholder="Username" {...register("email", { required: true })} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="form-addon">
                                <FontAwesomeIcon icon={faKey} color="#63102f" size="xs" />
                            </span>

                            <input type="password" placeholder="Password" className="form-control" {...register("password", { required: true })} />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            <FontAwesomeIcon icon={faArrowAltCircleRight} color="red" size="xs" />
                        </button>
                    </div>
                </form>
                <span className="bottom" onClick={() => {
                    setRegistrationModal(true)
                    setForgetModal(false);
                    // setModal(registrationModal);
                    }}>
                    Join Us
                </span>
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            {registrationModal ? (
                <Model title="Singup" onCancel={() => setRegistrationModal(false)}>
                    <RegistrationForm onOK={handleOK} />
                </Model>
            ) : (
                forgetModal && (
                    <Model title="Forget Password" onCancel={() => setForgetModal(false)}>
                        <ForgetPassword />
                    </Model>
                )
            )}
        </>
    );
};

export default Login;

// https://codesandbox.io/s/react-router-with-authentication-original-forked-ojyht?file=/index.js

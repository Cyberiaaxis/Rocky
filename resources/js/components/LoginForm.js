import { useState, useEffect } from "react";
import "../styles/LoginForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import Fetch from "../libraries/Fetch";
import Modal from "./Modal";
import RegistrationForm from "./RegistrationForm";
import { useHistory, Link } from "react-router-dom";

const LoginForm = () => {
    const {
        register,
        setError,
        formState: { errors },
        handleSubmit,
        clearErrors,
    } = useForm();
    const AuthStateContext = React.createContext();
    const history = useHistory();


    const onSubmit = async (data) => {
        const result = await Fetch("auth/login", { method: "post", data });

        if (result.user) {
            const resultUser = {
                userId: result.user.id,
                accessToken: result.access_token,
                loggedIn: true,
            };

            // localStorage.setItem("userDetails", JSON.stringify(resultUser));
            // history.push("/dashboard");
        } else {
            for (const [fieldName, errors] of Object.entries(result.errors)) {
                setError(fieldName, {
                    type: "manual",
                    message: errors[0],
                });
            }

        setTimeout(() => {clearErrors()}, 5000); 
        }
    };
    // console.log(errors.email);
    return (
        <>
            <div>
                <p className="top">
                    <Link to="/" data-toggle="modal" data-target="#forget">
                        Recover Account
                    </Link>
                </p>
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
                        \{" "}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            <FontAwesomeIcon icon={faArrowAltCircleRight} color="red" size="xs" />
                        </button>
                    </div>
                </form>
                <p className="bottom">
                    <Link to="/" data-toggle="modal" data-target="#registration">
                        Create Account
                    </Link>
                </p>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <Modal body={<span>Forget</span>} id="forget" />
            <Modal
                body={
                    <span>
                        <RegistrationForm />
                    </span>
                }
                id="registration"
            />
        </>
    );
};

export default LoginForm;

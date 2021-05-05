import React from 'react';
// import '../styles/RegistrationForm.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'react-hook-form';
import useFetchApi from '../libraries/useFetchApi';
import { useHistory } from 'react-router-dom';
import "../styles/RegistrationForm.scss";


// import {  } from 'react-router-dom';
export default function RegistrationForm() {
    const { register, errors, handleSubmit, clearErrors } = useForm();
    const history = useHistory();
    // const { error, result , api, loading} = useFetchApi();
    const url = 'register'
    const onSubmit = (res) => {
        console.log(res);
        //  useFetchApi(url,{method: 'post', res});

        //  if(!error){
        //     return 'activate your account';
        //  }

        //  console.log(res);
    };
    return (<>
            <form className="" method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div className="input-group">
                        <span className="form-addon"><FontAwesomeIcon icon={faUser} color='#63102f' size="xs" /></span>
                        <input type="text" placeholder='Name' className='form-control' {...register("name", { required: true })} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <span className="form-addon"><FontAwesomeIcon icon={faEnvelope} color='#63102f' size="xs" /></span>
                        <input type="email" placeholder='Email' className='form-control' {...register("email", { required: true })} />
                    </div>
                </div>
                <div className="form-group">
                    <div className='input-group'>
                        <span className="form-addon"><FontAwesomeIcon icon={faKey} color='#63102f' size="xs" /></span>
                        <input type="password" placeholder='Password' className='form-control' {...register("password", { required: true, maxLength: 20 })}/>
                    </div>
                </div>
                                <div className="form-group">
                    <div className='input-group'>
                        <span className="form-addon"><FontAwesomeIcon icon={faKey} color='#63102f' size="xs" /></span>
                        <input type="password" placeholder='Confirm Password' className='form-control'  {...register("password_confirmation", { required: true, maxLength: 20 })} />
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary registerButton" >Join Us</button>
                </div>
            </form>
    </>);
}

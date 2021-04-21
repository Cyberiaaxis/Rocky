import React from 'react';
import '../styles/LoginForm.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'react-hook-form';
import useFetchApi from '../libraries/useFetchApi';
import Modal from "./Modal";
import RegistrationForm from "./RegistrationForm";
import { useHistory, Link } from 'react-router-dom';

export default function LoginForm() {
    const { register, errors, handleSubmit, clearErrors } = useForm();
    const url = 'login';
    const { error, result , api, loading} = useFetchApi();
    const history = useHistory();

    const onSubmit = (res) => {

        console.log(res);
        //  api(url,{method: 'post',data: res});

        //  if(!error){
        //     return history.push('/dashboard');
        //  }

        //  console.log(res);
    };

    return (<>
        <div>
            <p className='top'><Link to='/' data-toggle="modal" data-target='#forget'>Recover Account</Link></p>
            <form className="form-inline" method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div className="input-group">
                        <span className="form-addon"><FontAwesomeIcon icon={faUser} color='#63102f' size="xs" /></span>
                        
                        <input type="email" placeholder='Username'  {...register("email", { required: true })} />
                    </div>
                    {errors !=undefined && errors.email && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <div className='input-group'>
                        <span className="form-addon"><FontAwesomeIcon icon={faKey} color='#63102f' size="xs" /></span>

                        <input type="password" placeholder='Password' className='form-control' {...register("password", { required: true })} />
                    </div>
                    {errors !=undefined && errors.password && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" ><FontAwesomeIcon icon={faArrowAltCircleRight} color='red' size="xs" /></button>
                </div>
                        {JSON.stringify(error.errors) && error.errors.email && <span>{error.errors.email}</span>}
            </form>
            <p className='bottom'><Link to='/' data-toggle="modal" data-target='#registration' >Create Account</Link></p>
            {loading && JSON.stringify(result) }
        </div>
            <Modal body={<span>Forget</span>} id='forget'/>
            {/* <Modal body={<span><RegistrationForm/></span>}  id='registration'/> */}
    </>);
}

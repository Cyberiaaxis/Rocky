import React, { Component } from 'react';

export default class Login extends Component{

    submitClick() {

    }

    render() {
        return (
            <div className="form-box">
                <div className="sign-in">
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="admin@localhost.dev" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                    </div>
                    <div class="form-group d-flex">
                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" name="remember" id="remember" />

                            <label className="form-check-label" for="remember">
                                Remember Me
                        </label>
                        </div>

                        <a className="ml-auto" href="https://djdex.org/password/reset">
                            Forgot Your Password?
                    </a>
                    </div>
                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                </div>
            </div>
        );
    }
}





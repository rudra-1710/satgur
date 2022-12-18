import React, { useState } from 'react';

// react router dom
import { Link } from 'react-router-dom';

// images
import logo from '../../assets/images/logo.png';
import login_image from '../../assets/images/login-image.jpg';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="form-page login">
            <div className="form-page-wrapper">
                <div className="form-page-content">
                    <div className="form-page-content-wrapper">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <h1 className="txt-center">Login</h1>
                        <form>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="checkbox" id="keep-logged-in" checked={loggedIn} onChange={(e) => setLoggedIn((prev) => !prev)} />
                            <label htmlFor="keep-logged-in">Keep me logged in</label>
                            <button className="button button-3 txt-upper" type="submit">
                                <div>
                                    <i className="fas fa-check"></i>
                                    <span>login</span>
                                </div>
                            </button>
                        </form>
                        <div className="txt-center link-group">
                            <Link to="#" className="link">
                                <span className="f-w-500">Forgot Password?</span>
                            </Link>
                            <h5>Don’t have an account yet? 
                                <Link to="/signup" className="link txt-center">
                                    <span className="f-w-500">Create one now!</span>
                                </Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="form-page-image">
                    <img src={login_image} alt="login" />
                </div>
            </div>
        </div>
    );
};

export default Login;

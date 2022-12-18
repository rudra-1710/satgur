import React, { useState } from 'react';

// react router dom
import { Link } from 'react-router-dom';

// images
import logo from '../../assets/images/logo.png';
import signup_image from '../../assets/images/signup-image.jpg';

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="form-page signup">
            <div className="form-page-wrapper">
                <div className="form-page-content">
                    <div className="form-page-content-wrapper">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <h1 className="txt-center">Register</h1>
                        <form>
                            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input type="email" placeholder="Email"value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <button className="button button-3 txt-upper" type="submit">
                                <div>
                                    <i className="fas fa-check"></i>
                                    <span>register</span>
                                </div>
                            </button>
                        </form>
                        <div className="txt-center link-group">                        
                            <h5>Already have an account yet? <Link to="/login" className="link  txt-center"><span>Login now!</span></Link></h5>
                        </div>
                    </div>
                </div>
                <div className="form-page-image">
                    <img src={signup_image} alt="signup" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;

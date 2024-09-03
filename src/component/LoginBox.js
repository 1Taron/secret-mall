import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/loginbox.css';

export default function LoginBox() {
    const idRef = useRef();
    const passwordRef = useRef();

    const idRef2 = useRef();
    const passwordRef2 = useRef();
    const emailRef = useRef();

    const [isSignIn, setIsSignIn] = useState(true);

    function handle_SignIn(event) {
        event.preventDefault();
        console.log('id: ' + idRef.current.value);
        console.log('password: ' + passwordRef.current.value);
    }

    function handle_SignUp(event) {
        event.preventDefault();
        console.log('SignUp id: ' + idRef2.current.value);
        console.log('SignUp password: ' + passwordRef2.current.value);
        console.log('SignUp email: ' + emailRef.current.value);
    }

    function toggleSignInSignUp() {
        setIsSignIn(prev => !prev); // 상태 토글
    }

    const logoUrl = 'https://1Taron.github.io/secret-mall/images/logo.png';

    return (
        <>
            <Link to="/">
                <img className="thumbnail" src={logoUrl} alt="dimhub" />
            </Link>

            <div className="container">
                <div className={`sign_section_form ${isSignIn ? 'active' : 'inactive'}`}>
                    {/* SIGN IN FORMBOX */}
                    {isSignIn && (
                        <div className="sign_formbox">
                            <p className="logo_font">Sign In</p>
                            <p>Login to your account</p>
                            <form onSubmit={handle_SignIn}>
                                <div>
                                    <input className="inputbox" type="text" ref={idRef} placeholder="ID" />
                                </div>
                                <div>
                                    <input
                                        className="inputbox"
                                        type="password"
                                        ref={passwordRef}
                                        placeholder="PASSWORD"
                                    />
                                </div>
                                <div className="sign_btnlayout">
                                    <a href="/" className="find_pw">
                                        Forgot your password?
                                    </a>
                                    <button className="signin_btn" type="submit">
                                        <p className="default_font">SIGN IN</p>
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                    {/* SIGN UP FORMBOX */}
                    {!isSignIn && (
                        <div className="sign_formbox">
                            <p className="logo_font">Sign Up</p>
                            <p>Create your account</p>
                            <form onSubmit={handle_SignUp}>
                                <div>
                                    <input className="inputbox" type="text" ref={idRef2} placeholder="ID" />
                                </div>
                                <div>
                                    <input
                                        className="inputbox"
                                        type="password"
                                        ref={passwordRef2}
                                        placeholder="PASSWORD"
                                    />
                                </div>
                                <div>
                                    <input className="inputbox" type="text" ref={emailRef} placeholder="EMAIL" />
                                </div>
                                <div className="sign_btnlayout">
                                    <button className="signup_btn" type="submit">
                                        <p className="default_font">SIGN UP</p>
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>

                <div
                    className={`sign_section_overlay ${isSignIn ? 'active' : 'inactive'}`}
                    style={{
                        backgroundImage: isSignIn
                            ? 'linear-gradient(to bottom, #546ecd, #89a1f6)'
                            : 'linear-gradient(to bottom, #73cd54, #aadc99)',
                    }}
                >
                    {/* SIGN IN OVERLAY */}
                    {isSignIn ? (
                        <>
                            <p className="logo_font signin_overlay_p">Create Your Account</p>
                            <button className="signup_changebtn" onClick={toggleSignInSignUp}>
                                <p className="default_font">SIGN UP</p>
                            </button>
                        </>
                    ) : (
                        <>
                            {/* SIGN UP OVERLAY */}
                            <p className="logo_font signup_overlay_p">Have Already Account?</p>
                            <p>To keep connect with us please login with your account here!</p>
                            <button className="signin_changebtn" onClick={toggleSignInSignUp}>
                                <p className="default_font">SIGN IN</p>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

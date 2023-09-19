import React, { useState, useRef, useContext } from 'react';
import authContext from '../context/auth/authContext';
// import contentContext from '../context/content/contentContext';

const Register = (props) => {
    const [closed, setClosed] = useState(false);
    const { register, isLoggedIn } = useContext(authContext);

  
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const nicknameRef = useRef(null);
  
    if (isLoggedIn) return null;

    // const {setAuthWindow} = props;


    const handleClose = () => {
        setClosed(true);
    }

    const handleRegister = (e) => {
        e.preventDefault();

        const name = nicknameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        e.preventDefault();
    
        // Validation checks
        if (!name || !email || !password) {
          // Handle case when any field is empty
          return alert('All fields are required.');
        }
    
        if (name.length < 5 || name.length > 12) {
          return alert('Name must be between 5 and 12 characters.');
        }
    
        if (password.length < 6) {
          return alert('Password must be at least 6 characters.');
        }
    
        if (confirmPassword != password) {
          return alert('Password and Confirm Password do not match.');
        }
    
        // All validation checks passed, proceed with registration
        register(name, email, password);
    }

  return(
    !closed &&
    <div
        className="panel screen-component popup registration-popup-container modal"
        tabIndex={0}
        style={{ zIndex: 4 }}
    >
        <div className="panel modal-bg" />
        <div className="screen-wrapper">
        <div className="panel screen-content show-popup-animation">
            <div className="poker-widget-registration-wrapper">
            <div className="">
                <div className="poker-widget root-content registration html5-wrapper swc-common swc poker-widget-design-desktop">
                <div className="poker-widget-content">
                    <div className="poker-widget-wrapper screen-type-popup">
                    <div className="poker-widget-page poker-widget-registration">
                        <div className="poker-widget-registration-content">
                        <div className="title">Create Account</div>
                        <div className="errors" />
                        <div className="registration-fields">
                            <div
                            className="scroll-panel"
                            style={{
                                position: "relative",
                                height: "100%",
                                width: "100%",
                                overflow: "hidden",
                                touchAction: "none"
                            }}
                            >
                            <div
                                className="scroll-wrapper"
                                style={{
                                transform: "translate(0px, 0px) translateZ(0px)"
                                }}
                            >
                                <div className="field-block input-text-field nick-field">
                                <div className="field-label">
                                    <div className="field-label-content">
                                    <div className="field-label-text">
                                        <span className="required">* </span>
                                        <span> Nick: </span>
                                    </div>
                                    </div>
                                </div>
                                <div className="field-value">
                                    <div className="field-value-content">
                                    <input
                                        tabIndex={0}
                                        className="input-field"
                                        defaultValue=""
                                        name="nickname"
                                        autoComplete="off"
                                        ref={nicknameRef}
                                        minLength="5"
                                        maxLength="12"
                                        required
                                    />
                                    </div>
                                </div>
                                </div>
                                <div className="field-block input-text-field password-field">
                                <div className="field-label">
                                    <div className="field-label-content">
                                    <div className="field-label-text">
                                        <span className="required">* </span>
                                        <span> Password: </span>
                                    </div>
                                    </div>
                                </div>
                                <div className="field-value">
                                    <div className="field-value-content">
                                    <input
                                        tabIndex={0}
                                        className="input-field"
                                        type="password"
                                        defaultValue=""
                                        name="password"
                                        minLength="6"
                                        autoComplete="new-password"
                                        ref={passwordRef}
                                        required
                                    />
                                    </div>
                                </div>
                                </div>
                                <div className="field-block input-text-field passwordConfirm-field">
                                <div className="field-label">
                                    <div className="field-label-content">
                                    <div className="field-label-text">
                                        <span className="required">* </span>
                                        <span> Confirm Password: </span>
                                    </div>
                                    </div>
                                </div>
                                <div className="field-value">
                                    <div className="field-value-content">
                                    <input
                                        tabIndex={0}
                                        className="input-field"
                                        type="password"
                                        defaultValue=""
                                        name="passwordConfirm"
                                        minLength="6"
                                        autoComplete="new-password"
                                        ref={confirmPasswordRef}
                                        required
                                    />
                                    </div>
                                </div>
                                </div>
                                <div className="field-block input-text-field email-field">
                                <div className="field-label">
                                    <div className="field-label-content">
                                    <div className="field-label-text">
                                        <span className="required">* </span>
                                        <span> E-mail: </span>
                                    </div>
                                    </div>
                                </div>
                                <div className="field-value">
                                    <div className="field-value-content">
                                    <input
                                        tabIndex={0}
                                        className="input-field"
                                        defaultValue=""
                                        ref={emailRef}
                                    />
                                    </div>
                                </div>
                                </div>
                                <div className="field-block input-text-field bonusCode-field">
                                <div className="field-label">
                                    <div className="field-label-content">
                                    <div className="field-label-text">
                                        <span> Referral code: </span>
                                    </div>
                                    </div>
                                </div>
                                <div className="field-value">
                                    <div className="field-value-content">
                                    <input
                                        tabIndex={0}
                                        className="input-field"
                                        defaultValue=""
                                    />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div
                                className="iScrollVerticalScrollbar iScrollLoneScrollbar show-hide-scrollbar-animation"
                                style={{
                                position: "absolute",
                                zIndex: 9999,
                                width: 7,
                                bottom: 2,
                                top: 2,
                                right: 1,
                                overflow: "hidden",
                                pointerEvents: "none",
                                transform: "translateZ(0px)",
                                transitionDuration: "0ms",
                                opacity: 0
                                }}
                            >
                                <div
                                className="iScrollIndicator"
                                style={{
                                    boxSizing: "border-box",
                                    position: "absolute",
                                    background: "rgba(0, 0, 0, 0.5)",
                                    border: "1px solid rgba(255, 255, 255, 0.9)",
                                    borderRadius: 3,
                                    width: "100%",
                                    transitionDuration: "0ms",
                                    display: "none",
                                    height: 233,
                                    transform: "translate(0px, 0px) translateZ(0px)"
                                }}
                                />
                            </div>
                            </div>
                        </div>
                        <div className="buttons-holder">
                            <div className="button-wrapper">
                            <div
                                className="panel simple-button poker-widget-registration-button send-form"
                                tabIndex={0}
                            >
                                <div className="simple-button-content" onClick={handleRegister}>Ok</div>
                            </div>
                            </div>
                            <div className="button-wrapper">
                            <div
                                className="panel simple-button poker-widget-registration-button close-button"
                                tabIndex={0}
                            >
                                <div className="simple-button-content" onClick={handleClose}>Close</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="poker-widget-context-menu" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Register;
import React, { useState, useRef, useContext } from 'react';
// import Container from '../components/layout/Container';
// import { Redirect, Link } from 'react-router-dom';
// import HeadingWithLogo from '../components/typography/HeadingWithLogo';
// import Button from '../components/buttons/Button';
// import { Input } from '../components/forms/Input';
// import { Form } from '../components/forms/Form';
// import { FormGroup } from '../components/forms/FormGroup';
// import { ButtonGroup } from '../components/forms/ButtonGroup';
// import { Label } from '../components/forms/Label';
// import RelativeWrapper from '../components/layout/RelativeWrapper';
// import ShowPasswordButton from '../components/buttons/ShowPasswordButton';
import useScrollToTopOnPageLoad from '../hooks/useScrollToTopOnPageLoad';
import authContext from '../context/auth/authContext';
import contentContext from '../context/content/contentContext';
// import { TiledBackgroundImage } from '../components/decoration/
const LogIn = (props) => {
    const {setAuthWindow} = props;
    const [authed, setAuthed] = useState(false);
    const [closed, setClosed] = useState(authed);
    const handleAuth = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        email &&
            password &&
            email.length > 0 &&
            password.length > 0 &&
            login(email, password);
    }

    const handleClose = () => {
        setClosed(true);
    }

    const { getLocalizedString } = useContext(contentContext);
    const { login, isLoggedIn } = useContext(authContext);

    useScrollToTopOnPageLoad();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    if (isLoggedIn) return null;

  return(
    !closed &&
    <div className="panel screen-component popup login-container extra-0 modal" tabIndex={0} style={{ zIndex: 3 }} >
        <div className="panel modal-bg" />
        <div className="screen-wrapper">
            <div className="panel screen-content show-popup-animation">
            <div className="login-container-content">
                <form className="form" autoComplete="on"
                    onSubmit={(e) => {
                    e.preventDefault();
                    const email = emailRef.current.value;
                    const password = passwordRef.current.value;
        
                    email &&
                    password &&
                    email.length > 0 &&
                    password.length > 0 &&
                    login(email, password);
                }}>
                <div className="login-fields">
                    <input
                    name="username"
                    ref={emailRef}
                    className="input-field login-form-input-field username-field black-input"
                    placeholder="Enter username"
                    type="text"
                    defaultValue=""
                    wfd-id="id0"
                    />
                    <input
                    name="password"
                    ref={passwordRef}
                    className="input-field login-form-input-field password-field black-input"
                    placeholder="Enter password"
                    type="password"
                    defaultValue=""
                    wfd-id="id1"
                    />
                    <div className="remember-me checkbox-field login-form-checkbox-field">
                    <div
                        className="panel simple-check-box field-value"
                        tabIndex={0}
                    />
                    <div className="field-label">Remember Me</div>
                    </div>
                </div>
                <div className="language-selector-holder">
                    <div className="language-selector-component">
                    <div className="language-selector-component-content">
                        <div className="panel current-language-icon flag-icon-en" />
                    </div>
                    </div>
                </div>
                <div className="buttons-holder">
                    <div
                    className="panel simple-button sign-in-button-submit green-button login-form-button"
                    tabIndex={0}
                    >
                    <div className="simple-button-content" onClick={handleAuth}>Sign In</div>
                    </div>
                    <div
                    className="panel simple-button forgot-password-button-submit gray-button login-form-button"
                    tabIndex={0}
                    >
                    <div className="simple-button-content">Forgot Password?</div>
                    </div>
                    <div
                    className="panel simple-button sign-up-button-submit gray-button login-form-button"
                    tabIndex={0}
                    >
                    <div className="simple-button-content" onClick={() => setAuthWindow('register')}>Sign Up</div>
                    </div>
                    <div
                    className="panel simple-button cancel-button-submit gray-button login-form-button"
                    tabIndex={0}
                    >
                    <div className="simple-button-content" onClick={handleClose}>Cancel</div>
                    </div>
                    <button type="submit" value="" style={{ display: "none" }} />
                </div>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn;
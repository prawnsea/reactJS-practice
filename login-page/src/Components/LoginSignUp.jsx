import React from 'react';
import './LoginSignup.css';
import email_icon from '../Components/Icons/icons8-email-30.png';
import pass_icon from '../Components/Icons/icons8-password-30.png';
import google_icon from '../Components/Icons/icons8-google.svg';
import github_icon from '../Components/Icons/icons8-github.svg';
import facebook_icon from '../Components/Icons/icons8-facebook.svg';


const LoginSignUp = () => {
  return (
    <div>
      <div className='container'>
        <div className='header'>
            <div className='text'>Log In</div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email' />
            </div>
            <div className="input">
                <img src={pass_icon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        <div className="forgot-password">Forgot Password? <span>Click Here!</span>
        </div>
        <div className="submit-container">
            <div className="submit">Log In</div>
        </div>
        <div className="icon-container">
            <div className="altLogin">or log in using</div>
            <div className="icons">
                <img src={google_icon} alt="google-icon" />
                <img src={github_icon} alt="google-icon" />
                <img src={facebook_icon} alt="google-icon" />
            </div>
        </div>
      </div>

    </div>
  )
}

export default LoginSignUp

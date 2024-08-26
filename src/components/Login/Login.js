import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import './Login.css';

function Login({ setIsAuthenticated }) {
  const history = useNavigate();

  const handleGoogleSignIn = async (googleData) => {
    const res = await fetch('/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.credential,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data.success) {
      setIsAuthenticated(true);
      history.push('/onebox');
    } else {
      console.error('Google Sign In failed');
    }
  };

  return (
    <div className="login-container">
      <h1 className='he'><img src="./im.png" alt="ReachInbox Logo" className="logo" />ReachInbox</h1>
      <div className="login-box">
        
        <h2 className="title">Create a new account</h2>
        <GoogleLogin
          clientId="986139332256-1idf6n70u123fsarl5if48hs8ae1l4li.apps.googleusercontent.com"
          buttonText="Sign Up with Google"
          onSuccess={handleGoogleSignIn}
          onFailure={(err) => console.error('Google Sign In failed:', err)}
          cookiePolicy={'single_host_origin'}
          className="google-button"
        />
        <button className="create-account-button">
          Create an Account
        </button>
        <p className="sign-in-text">
          Already have an account? <a href="#" className="sign-in-link">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Login;


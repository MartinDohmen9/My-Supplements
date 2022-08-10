import React, { useEffect } from 'react';
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import "./styles.css"
import {GoogleButton} from 'react-google-button'

const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  }, [user]);

  return (
    <div>
      <div className='googlebtn'>
        <div/>
        <GoogleButton onClick={handleGoogleSignIn}/>
        <div/>
      </div>
    </div>
  );
};

export default Login;
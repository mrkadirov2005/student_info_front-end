import React from 'react';
import { Input, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './sign_in_styles.css';

export default function Sign_In() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Add sign-in logic here
    // For example, call an API, handle validation, etc.
  };

  return (
    <div className="Sign_in_Card_wrapper">
      <div className='sign_up_data_container_card' id="sign_in_data_container_card">
        <h1 className='sign_up_heading'>Sign In</h1>
        <label className='user_form_labels' htmlFor='user_full_name'>Username/Email:</label>
        <Input id='user_full_name' className='sign_up_input' />
        <label className='user_form_labels' htmlFor='user_password'>Password:</label>
        <Input type='password' id='user_password' className='sign_up_input user_password' />
        <Button
          className='sign_up_btn'
          variant='contained'
          color='primary'
          onClick={handleSignIn}
        >
          Sign In
        </Button>
        <em className='error_message'>error message</em>
        <p className='sign_up_page_redirect'>
          Don't have an account yet? <Link to="/sign_up" style={{color: "lightblue"}}>Sign up</Link> to your account.
        </p>
      </div>
    </div>
  );
}

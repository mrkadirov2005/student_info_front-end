import React from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import './sign_in_styles.css'
import { Input } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

export default function Sing_In() {
  const navigate=useNavigate()
  return (
    <div className="Sign_in_Card_wrapper" >

    <div className='sign_up_data_container_card' id="sign_in_data_container_card">
        <h1 class='sign_up_heading'>Sign In</h1>
        <label className='user_form_labels' htmlFor='user_full_name'>username/email:</label>
        <Input id='user_full_name' className='sign_up_input'></Input>
        <label className='user_form_labels' htmlFor='user_password'>Password:</label>
        <input type='password' id='user_password' className='sign_up_input  user_password'></input>
        <button className='sign_up_btn' variant='contained' color='black'>Sign Up</button>
        <em className='error_message'>error message</em>
        <p className='sign_up_page_redirect'>Don't have account yet? <Link to="sing_up" style={{color:"lightblue"}}>Sign up</Link> to your account. </p>
        {/* TODO correct sign in redirect because it is overwriting like sign_up/sign_in but it should be like sing_in itself */}
    </div>
    </div>
  )
}

import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
export default function Welcome() {
  return (
    <div className='welcome_container' >
    <section class="loader_card_wrapper" id="loader_card_wrapper">

    <h1>   Welcome to <e>Student Info</e> web page</h1> 
        <div class="loader" id="loader" ></div>
        <Link class="BTN" to="/sign_up" >sing in</Link>
    </section>
</div>
  )
}

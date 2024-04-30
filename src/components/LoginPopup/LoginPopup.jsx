import React, { useState } from 'react'
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState('Login');
  return (
    <div className="login-popup">
        <form  className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                <input type="text" placeholder='Your name' required/>
                <input type="email" placeholder='Your email' required/>
                <input type="password" placeholder='Password' required/>
            </div>
            <button>{currState==='signup' ? 'Create account':'Login'}</button>
        </form>
    </div>
  )
}

export default LoginPopup
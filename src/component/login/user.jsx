import React from 'react';
import { auth } from '../../firebase/firebase'; 
import './login-styles.css'

const User = ({ user }) => {
  return (

    <div className="container">
        <div className='user-page'>
      <h1 className=''>Hello, <span></span>{user.displayName}</h1>
      <img classname='user-img' src={user.photoURL} alt="" /> <br />  
      <button className="login-with-google-btn disabled" onClick={() => auth.signOut()}>Sign out</button>
      </div>
    </div>
  )
}

export default User;

import React, { useState } from 'react'
import "./SignInScreen.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const SignInScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register =(e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((authUser)=> {
            console.log(authUser);
        })
        .catch((err)=>{
            alert(err.message);
        })
    }

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((authUser)=> {
            console.log(authUser);
        })
        .catch((err)=>{
            alert(err.message);
        })
    }

  return (
    <div className='signinScreen'>
        <form>
            <h1>Sign In</h1>
            <input placeholder='Email' type='email' onChange={e=>setEmail(e.target.value)} />
            <input placeholder='Password' type='password' onChange={e=>setPassword(e.target.value)} />
            <button type='submit' onClick={signIn}>Sign In</button>

            <h4>
                <span className='signinScreen__gray'>New to Netflix?</span>
                <span className='signinScreen__link' onClick={register}>Sign Up Now</span>
            </h4>
        </form>
    </div>
  )
}

export default SignInScreen
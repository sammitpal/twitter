import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth} from './firebase'
import firebase from 'firebase'
function Login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    const signIn = () =>{
        auth.signInWithPopup(provider).catch(function(error) {
            var errorMessage = error.message;
            alert(errorMessage);
          });
    }
    return (
        <div className="login">
            <img className="login_logo" src="https://www.omnicoreagency.com/wp-content/uploads/2015/10/Twitter-Logo.png" alt=""/>
            <h1>Twitter</h1>
            <Button className="login_button" onClick={signIn}>Sign In with google</Button>
        </div>
    )
}

export default Login

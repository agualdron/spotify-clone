import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className="login">
            {/* Spotify Logo*/}
            {/* <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png" alt=""/> */}
            <img src="https://aldianews.com/sites/default/files/articles/spotify-logo-1920x1080_fouoik-1.jpg" alt=""/>

            {/* Loggin with spotify button */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login

import React from 'react'
import "./Player.css"
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

function Player({ spotify }) {
    return (
        <div className="player">
            {/* <h1>Welcome to Spotify</h1> */}

            <div className="player__body">
            {/* Sidebar */}
            <Sidebar></Sidebar>
            {/* Body */}
            <Body spotify={spotify}></Body>
            </div>

            {/* Footer */}
            <Footer spotify={spotify}></Footer>
        </div>
    )
}

export default Player
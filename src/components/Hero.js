import React from "react";
import {Button} from "./Button";
import "./Hero.css";
import video from './nebula.mp4'
import { useHistory } from 'react-router-dom'

function Hero() {
    const history = useHistory()

    const handleClick = () => {
        history.push('/portfolio/projects')
    }

    return (
        <div className='hero-container'>
            <video autoPlay={true} loop={true} muted={true} src={video}/>
            <h1>Dusty Dang</h1>
            <div className="hero-btn">
                <Button className = 'btn' buttonStyle='btn--outline' buttonSize='btn--large' onClick={handleClick}>
                    Projects
                </Button>
            </div>
            <p className= 'credit'>Video and Images Credits:</p>
            <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
        </div>
    )
}

export default Hero;
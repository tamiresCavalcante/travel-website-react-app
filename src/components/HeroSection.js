import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video source="../public/videos/video-1.mp4" type='video/mp4' autoPlay loop muted /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for ? </p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                    <FontAwesomeIcon icon={faPlay} />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;

import React from 'react';
import Button from './CustomButton';
import '../App.css';
import './Slider.css';


function Slider() {
    return (
        <div className="slider-container">
            <video src="/videos/video-2.mp2" autoPlay loop muted />
            <h1>WELCOME TO TECHNODES</h1>
            <p>Explore the electronic world</p>
            <div className="slider-btns">
                <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize='btn--large'
                >
                    WATCH TRAILER<i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    );
}

export default Slider;
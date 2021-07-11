import React ,{useState,useEffect} from 'react';
//import Button from './CustomButton';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const Slider = () => {
    const [duration,setDuration]  = useState(0.5);
    useEffect(() => {
        setDuration(0.5);
      }, []);
    return (
        <AwesomeSlider transitionDelay={duration}>
          <div data-src="img/bg1.jpg" />
          <div data-src="img/bg3.jpg" />
          <div data-src="img/bg4.jpg" />
        </AwesomeSlider>
          
    );
}

export default Slider;
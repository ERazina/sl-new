import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import meditation from './../../images/meditation.png';
import racoon from './../../images/racoon.png';
import birds from './../../images/birds.png';
import './Slider.scss';


const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <div className="slider">
      <AutoplaySlider
        play={false}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
        bullets={false}
      >
        <div data-src={meditation} />
        <div data-src={racoon} />
        <div data-src={birds} />
      </AutoplaySlider>
  </div>
  )
}

export default Slider;



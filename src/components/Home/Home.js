import React from 'react';
import meditation from './../../images/meditation.png';
import racoon from './../../images/racoon.png';
import birds from './../../images/birds.png';
import Slider from "react-slick";
import styles from './Home.module.scss';

    export default class Home extends React.Component {
        render() {
          const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrow: true
          };
          return (
            <div className={styles.root}>
              <Slider {...settings}>
                <div className='inner'>
                  <img src={meditation} className={styles.image} alt='meditation'/>
                </div>
                <div className='inner'>
                    <img src={racoon} alt='racoon'/>
                </div>
                <div className='inner'>
                    <img src={birds} alt='birds'/>
                </div>
              </Slider>
            </div>
          );
        }
      }

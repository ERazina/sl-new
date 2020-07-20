import React from 'react';
import { Link } from "react-router-dom";
import email from './../../images/email.svg';
import etsy from './../../images/etsy.svg';
import facebook from './../../images/facebook.svg';
import instagram from './../../images/instagram.svg';
import vk from './../../images/vk.svg';
import watsapp from './../../images/watsapp.svg';
import styles from './Footer.module.scss';

const Footer = () => {
    return(
        <div className={styles.root}>
            <div className={styles.root_blocks}>
            <a href="https://www.instagram.com/sl.fineart/" target="_blank"><img src={instagram} alt='instargam'  /></a>
            <a href='https://www.facebook.com/Sl.Fineart85' target="_blank"><img src={facebook} alt='instargam' /></a>
            <a href='https://wa.me/79045126424' target="_blank"><img src={watsapp} alt='whatsapp' /></a>
            <a href='https://www.vk.com/slebedeva8' target="_blank"><img src={vk} alt='vk.com' /></a>
            <a href='mailto:s.vento85@gmail.com' target="_blank"><img src={email} alt='email' /></a>
            <a href='https://www.etsy.com' target="_blank"><img src={etsy} alt='etsy' /></a>
           </div>
            <div className={styles.root_blocks, styles.root_bottom}>
                <div>Developed by <a className='link_names' href='http://www.erazina.info'>Elina</a>, designed by <Link to='/' className='link_names sl'>Sl </Link></div>
                <div>Saint-Petersburg, 2020
                    
                </div>
            </div>
        </div>
    );

}

export default Footer;
import React from 'react';
import logo from './../../images/logo.svg';
import yey from './../../images/yey.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return(
        <div className={styles.root}>
            <div>
            <Link className={styles.link} to='/'>
                <img  src={logo} alt='logo' />
                <span>Svetlana Lebedeva</span>
            </Link>
            </div>
            <img src={yey} alt='eye'/>
            <Navigation />
        </div>
    );

}

export default Header;
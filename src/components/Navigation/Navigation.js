import React from 'react';
import './Navigation.scss';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className='navigation'>
            <ul className='nav'>
                <li><Link to="/myworks" className="link">My works</Link></li>
                <li><Link to="/contacts" className="link">Contacts</Link></li>
                <li><Link to="/info" className="link">Info</Link></li>
            </ul>
        </div>
    );

}

export default Header;
import React from 'react';
import './Header.css';
import FontAwesome from 'react-fontawesome';

const Header = props => {
    return(
        <div className='Header'>
            <img className='Home-logo' src="https://www.pikpng.com/pngl/m/12-125193_clipartist-net-u00bb-clip-art-u00bb-home-icon.png"/>
            <img className='IMDB-logo' src="https://pbs.twimg.com/profile_images/976507090624589824/0x28al44_400x400.jpg"/>
            <span className='Logo'>{'Logo'}</span>
            <span className='User-name'>{'User name'}</span>
        </div>
    )
}

export default Header;
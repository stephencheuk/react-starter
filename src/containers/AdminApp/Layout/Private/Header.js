import React from "react";

import './Header.css';

import HeaderOption from '../../../components/HeaderOption';

//import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
//import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import logo from './logo.svg';

const Header = () => {

  return (
    <header className='header'>
      <div className='header__banner'>
        <div><img src={logo} className="header__banner__logo" alt="logo" /></div>
        <span>Your Company</span>
      </div>
      <div className='header__options'>
        <HeaderOption title={ 'Profile' } IconComp={ PersonIcon } link="/Profile" />
        <HeaderOption title={ 'Logout' } IconComp={ ExitToAppIcon } link="/Logout" />
      </div>
    </header>
  )

}

export default Header;

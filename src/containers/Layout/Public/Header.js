import React from "react";

import './Header.css';

import HeaderOption from '../../../components/HeaderOption';

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';

import logo from './logo.svg';

const Header = () => {

  return (
    <div className='header'>
      <div className='header__banner'>
        <div><img src={logo} className="header__banner__logo" alt="logo" /></div>
        <span>Your Company</span>
      </div>
      <div className='header__options'>
        <HeaderOption title={ 'Home' } IconComp={ HomeIcon } link="/" />
        <HeaderOption title={ 'Login' } IconComp={ PersonIcon } link="/Login" />
        <HeaderOption title={ 'About' } IconComp={ InfoIcon } link="/About" />
      </div>
    </div>
  )

}

export default Header;

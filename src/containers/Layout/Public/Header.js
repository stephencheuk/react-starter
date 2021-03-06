import React from "react";

import './Header.css';

import HeaderOption from '../../../components/HeaderOption';

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@material-ui/icons/Book';

import logo from './logo.svg';

const Header = () => {

  return (
    <header className='header md:justify-between'>
      <div className='header__banner'>
        <div><img src={logo} className="header__banner__logo" alt="logo" /></div>
        <span>Your Company</span>
      </div>
      <div className='hidden md:flex'>
        <HeaderOption title={'Home'} IconComp={HomeIcon} link="/" />
        <HeaderOption title={'Book Shelf'} IconComp={BookIcon} link="/Bookshelf" />
        <HeaderOption title={'Notion'} IconComp={BookIcon} link="/Notion" />
        <HeaderOption title={'Use Hook'} IconComp={BookIcon} link="/UseHook" />
        <HeaderOption title={'Sign Up'} IconComp={PersonIcon} link="/SignUp" />
        <HeaderOption title={'Sign In'} IconComp={PersonIcon} link="/Login" />
        <HeaderOption title={'About'} IconComp={InfoIcon} link="/About" />
      </div>
    </header>
  )

}

export default Header;

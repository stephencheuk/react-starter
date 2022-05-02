import React from 'react'

import HeaderSocials from "./HeaderSocials"

import CV from "../assets/cv.pdf"
import ME from "../assets/me.png"

import { FaArrowRight } from "react-icons/fa"

import "./header.css"

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h5>Hello, I'm</h5>
        <h1>Stephen Cheuk</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <div className='cta'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down <FaArrowRight /></a>

      </div>

    </header>
  )
}

export default Header
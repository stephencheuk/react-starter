import { useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"

import "./nav.css"

const Nav = () => {

  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a href="#home"
        onClick={e=>setActiveNav('#home')}
        className={ activeNav === '#home' ? 'active': '' }
      ><AiOutlineHome /></a>
      <a href="#about"
        onClick={e=>setActiveNav('#about')}
        className={ activeNav === '#about' ? 'active': '' }
      ><AiOutlineUser /></a>
      <a href="#experience"
        onClick={e=>setActiveNav('#experience')}
        className={ activeNav === '#experience' ? 'active': '' }
      ><BiBook /></a>
      <a href="#services"
        onClick={e=>setActiveNav('#services')}
        className={ activeNav === '#services' ? 'active': '' }
      ><RiServiceLine /></a>
      <a href="#contact"
        onClick={e=>setActiveNav('#contact')}
        className={ activeNav === '#contact' ? 'active': '' }
      ><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
import React from "react";
import { Link } from "react-router-dom";

import "./HeaderOption.css"

const HeaderOption = ({ IconComp, title, link }) => {

  return (
    <div className='headerOption'>
      <Link to={ link } >
        <div className='headerOption__icon'>{ IconComp && <IconComp className='headerOption__icon__comp' /> }</div>
        <div className='headerOption__title'>{ title }</div>
      </Link>
    </div>
  );

}

export default HeaderOption;

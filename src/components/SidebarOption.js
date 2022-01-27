import React from "react";
import { Link } from "react-router-dom";

import "./SidebarOption.css"

const SidebarOption = ({ IconComp, title, link }) => {

  return (
    <Link to={ link } >
      <div className='sidebaroption'>
        <div className='sidebaroption__icon'>{ IconComp && <IconComp className='sidebaroption__icon__comp' /> }</div>
        <div className='sidebaroption__title'>{ title }</div>
      </div>
    </Link>
  );

}

export default SidebarOption;

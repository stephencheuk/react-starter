import React from "react";
import { Link } from "react-router-dom";

import "./sidebarOpt.css"

const SidebarOpt = ({ IconComp, title, link }) => {

  return (
    <div className='sidebarOpt'>
      <Link to={link} >
        <div className='item' tips={title}>
          <div className='sidebarOpt__icon'>{IconComp && <IconComp className='sidebarOpt__icon__comp' />}</div>
          <div className='sidebarOpt__title'>{title}</div>
        </div>
      </Link>
    </div>
  );

}

export default SidebarOpt;

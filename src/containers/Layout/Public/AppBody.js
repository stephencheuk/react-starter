import React from "react";

import "./AppBody.css";

const AppBody = ({ children, ...props }) => {

  return (
    <div className='appbody'>
      { children }
    </div>
  )

}

export default AppBody;

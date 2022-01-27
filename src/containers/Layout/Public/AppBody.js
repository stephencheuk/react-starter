import React from "react";

import "./AppBody.css";

const AppBody = ({ children, ...props }) => {

  return (
    <main className='appbody'>
      { children }
    </main>
  )

}

export default AppBody;

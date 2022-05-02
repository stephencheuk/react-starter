import React from "react";

import "./AppBody.css";

const AppBody = ({ children, className, ...props }) => {

  return (
    <main className={className}>
      <div className="appbody">
        {children}
      </div>
    </main>
  )

}

export default AppBody;

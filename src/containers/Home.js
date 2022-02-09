import React from "react";

const Home = (props) => {

//  const { REACT_APP_API_URL } = process.env;

  return (
    <div>
      <div>
        Home Here
      </div>
      <div>
        { JSON.stringify(process.env) }
      </div>
    </div>
  )
}

export default Home;
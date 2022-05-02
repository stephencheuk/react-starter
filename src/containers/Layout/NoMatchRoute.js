import React from "react";
import { useLocation } from "react-router-dom";

const NoMatchRoute = () => {

  let location = useLocation()

  return (
    <div>
      <h1>404</h1>
      <h2>The path {location.pathname} does not find</h2>
      <h2>It looks like you're lost...</h2>
    </div>
  );
}

export default NoMatchRoute;

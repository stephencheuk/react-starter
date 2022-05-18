import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { GiSkeletalHand } from "react-icons/gi"

const NoMatchRoute = () => {

  let location = useLocation()
  const navigate = useNavigate()

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <GiSkeletalHand style={{ fontSize: '30px', fontWeight: 700 }} />
        <h1 style={{ fontSize: '30px', fontWeight: 700 }}>
          404
        </h1>
        <GiSkeletalHand style={{ fontSize: '30px', fontWeight: 700 }} />
      </div>
      <div>The path {location.pathname} does not find</div>
      <div>It looks like you're lost...</div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default NoMatchRoute;

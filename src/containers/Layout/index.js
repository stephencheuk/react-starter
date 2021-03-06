import { useLocation, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";

import Public from "./Public";
import Private from "./Private";
import NoMatchRoute from "./NoMatchRoute";
import { isPrivateArea, importRoute } from "../../utils/helper";

import './index.css';

const Layout = ({ menu, ...props }) => {

  const [area, setArea] = useState(isPrivateArea());

  const location = useLocation();

  useEffect(()=>{
    setArea(isPrivateArea(location.pathname));
  }, [location.pathname]);

  return <>
    {
      <Routes>
        <Route path="/" element={ area ? <Private /> : <Public /> }>
          {
            //menu && menu.filter(o=>area ? o.protect : !o.protect).map(R => {
            menu && menu.map(R => {
              return importRoute(R);
            })
          }
          <Route
            path="*"
            element={ <NoMatchRoute /> }
          />

        </Route>
      </Routes>
    }
  </>
}

export default Layout;

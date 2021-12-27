import { useLocation, Route, Routes } from "react-router-dom";

import { lazy, useState, useEffect, Suspense } from "react";

import Public from "./Public";
import Private from "./Private";
import { isPrivateArea } from "../../utils/helper";

import './index.css'

const importRoute = route => {
  const Component = lazy(() => 
    import(`../../${route.path}`).catch((e) => {
      console.log(e);
      import(`./NoComponents`);
    }));

  let path = route.link === '/' ? '/' : `${route.link}/*`;

  return <Route
            key={ route.link }
            path={ path }
            element={
              <Suspense fallback={<> Loading </>}>
                <Component />
              </Suspense>
            }
          />
}

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
            menu && menu.filter(o=>area ? o.protect : !o.protect).map(R => {
              return importRoute(R);
            })
          }
        </Route>
      </Routes>
    }
  </>
}

export default Layout;

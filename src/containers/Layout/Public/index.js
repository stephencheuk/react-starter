import { Outlet } from 'react-router-dom';

import Header from './Header';
import AppBody from './AppBody';

//import Sidebar from './Sidebar';
//import Widget from './Widget';

import './index.css';

const Public = () => {

  return (
    <div className='app'>
      <Header />
      <AppBody>
        {/* uncomment if exists sidebar */}
        {/* <Sidebar /> */}
        <Outlet />
        {/* uncomment if exists widget or right sidebar */}
        {/* <Widget /> */}
      </AppBody>
    </div>
  );

}

export default Public;
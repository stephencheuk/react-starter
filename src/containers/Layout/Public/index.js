import { Outlet } from 'react-router-dom';

import Header from './Header';
import AppBody from './AppBody';
import SidebarBlog from './SidebarBlog';

//import Widget from './Widget';

import './index.css';

const Public = () => {

  return (
    <div className='app flex flex-row'>
      <SidebarBlog className="w-[14.22%]" />
      <AppBody className="flex-1">
        <Header />
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
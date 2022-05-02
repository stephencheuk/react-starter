import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import AppBody from './AppBody';
import SidebarBlog from './SidebarBlog';

//import Widget from './Widget';

import './index.css';
import Console from './Console';

const Public = () => {

  return (
    <AppBody className="flex-1">
      <Header />
      {/* uncomment if exists sidebar */}
      {/* <Sidebar /> */}
      <Outlet />
      {/* uncomment if exists widget or right sidebar */}
      {/* <Widget /> */}
      <Footer />
    </AppBody>
  );

}

export default Public;
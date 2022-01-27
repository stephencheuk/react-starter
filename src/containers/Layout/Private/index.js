import { Outlet } from 'react-router-dom';

import Header from './Header';
import AppBody from './AppBody';

import Sidebar from './Sidebar';
//import Widget from './Widget';

import Toast from '../../../components/Toast';

import './index.css';

const Private = () => {

  return (
    <div className='app'>
      <Toast />
      <Header />
      <AppBody className="app__appbody">
        <div className="app__appbody__sidebar">
          <Sidebar />
        </div>
        <div className="app__appbody__body">
          <Outlet />
        </div>
      </AppBody>
    </div>
  );

}

export default Private;

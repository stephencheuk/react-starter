//import { lazy } from "react";

import {
  ExitToApp as LogoutIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  DeveloperBoard as DeveloperBoardIcon,
} from '@material-ui/icons';
//
//const privateMenu = [
//    { name: 'Dashboard', path: '/Dashboard', component: require('../Dashboard').default, icon: <DashboardIcon />, exact: true },
//    { name: 'Projects',  path: '/Projects', component: require('../Projects').default, icon: <DeveloperBoardIcon /> },
//    { name: 'Settings',  path: '/Settings', component: require('../Settings').default, icon: <SettingsIcon />, exact: true },
//    { name: 'Logout',    path: '/Logout', component: require('../Logout').default, icon: <LogoutIcon />, exact: true },
////
////////    { name: 'Home',        path: '/',        icon: <HomeIcon/> },
////////    { name: 'Ordering',    path: '/ordering' },
////////    { name: 'GitStudy',    path: '/gitstudy' },
//////
//////    { name: 'TGS1',        path: '/tgs1', component: require('../TGS1/loader').default },
//////
////    { name: 'Products',    path: '/Products', component: require('../Products/loader').default },
////    { name: 'DataTables',    path: '/DataTables', component: require('../DataTables').default },
//////
//////    { name: 'DataTable Demo',    path: '/datatable', component: require('../DataTable/ReactTableDemo/loader').default },
//////
////////    { name: 'Books',         path: '/books', component: require('../books').default },
//////
//////    { name: 'Password',    path: '/pwdmanager' },
//////
////////    { name: 'User',        path: '/user' },
////////    { name: 'Setting',     path: '/setting' },
////////    { name: 'Maintenance', path: '/maintenance' },
////////    { name: 'Chats',       path: '/chats' },
////////    { name: 'Resolution',  path: '/resolution' },
//////
//////    { name: 'Mongo',       path: '/mongo', component: require('../mongo').default },
//////    { name: 'Simple',      path: '/Simple', component: require('../Simple').default },
//  ];
//
//privateMenu.forEach((o, i) => {
//  if(!o.link) o.link = o.path;
//  if(o.param){
//    var path = [o.path];
//    for(var x=0; x<o.param.length; x++){
//      path.push([path[-1], o.param[x]].join('/'));
//    }
//    o.path = path;
//  }
//})
//
////console.log('menu', require('../Login').default);
//
//const publicMenu = [
////    { name: 'Home',     path: '/Home', component: <div className='flex1 flex center'>Home</div> },
////    { name: 'About Us',     path: '/AboutUs', component: <div className='flex1 flex center'>About Us</div> },
//    { name: 'ROOT',     path: '/', component: require('../Login').default, hide: true },
//    { name: 'Login',     path: '/Login', component: require('../Login').default },
////
////////    { name: 'Home',        path: '/',        icon: <HomeIcon/> },
////////    { name: 'Ordering',    path: '/ordering' },
////////    { name: 'GitStudy',    path: '/gitstudy' },
//////
//////    { name: 'TGS1',        path: '/tgs1', component: require('../TGS1/loader').default },
//////
////    { name: 'Products',    path: '/Products', component: require('../Products/loader').default },
////    { name: 'DataTables',    path: '/DataTables', component: require('../DataTables').default },
//////
//////    { name: 'DataTable Demo',    path: '/datatable', component: require('../DataTable/ReactTableDemo/loader').default },
//////
////////    { name: 'Books',         path: '/books', component: require('../books').default },
//////
//////    { name: 'Password',    path: '/pwdmanager' },
//////
////////    { name: 'User',        path: '/user' },
////////    { name: 'Setting',     path: '/setting' },
////////    { name: 'Maintenance', path: '/maintenance' },
////////    { name: 'Chats',       path: '/chats' },
////////    { name: 'Resolution',  path: '/resolution' },
//////
//////    { name: 'Mongo',       path: '/mongo', component: require('../mongo').default },
//////    { name: 'Simple',      path: '/Simple', component: require('../Simple').default },
//  ];
//
//publicMenu.forEach((o, i) => {
//  if(!o.link) o.link = o.path;
//  if(o.param){
//    var path = [o.path];
//    for(var x=0; x<o.param.length; x++){
//      path.push([path[-1], o.param[x]].join('/'));
//    }
//    o.path = path;
//  }
//})
//
////console.log('Route Path', publicMenu, privateMenu);
////  lazy(() =>
////    import(`./charts/${chartName}`).catch(() => import(`./charts/NullChart`))
////  );

const Menu = [
  {
    name: 'Home',
    link: '/',
    path: 'containers/Home',
    icon: <DashboardIcon />,
    exact: true,
    protect: false,
  },
  {
    name: 'Login',
    link: '/Login',
    path: 'containers/Login',
    icon: <DashboardIcon />,
    exact: true,
    protect: false,
  },
  {
    name: 'About',
    link: '/About',
    path: 'containers/About',
    icon: <DashboardIcon />,
//    exact: true,
    protect: false,
  },
  {
    name: 'Dashboard',
    link: '/Dashboard',
    menu: 'Dashboard',
    path: 'containers/Dashboard',
    icon: <DashboardIcon />,
    exact: true,
    protect: true,
  },
  {
    name: 'Settings',
    link: '/Settings',
    menu: 'Settings',
    path: 'containers/Settings',
    icon: <DashboardIcon />,
    exact: true,
    protect: true,
  }
]

//export { privateMenu, publicMenu, Menu };
export { Menu };

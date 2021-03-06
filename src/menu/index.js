//import { lazy } from "react";

import {
  ExitToApp as LogoutIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  //  DeveloperBoard as DeveloperBoardIcon,
  Person as PersonIcon,
  Book as BookIcon,
  Storage as StorageIcon,
} from '@material-ui/icons';

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
    name: 'BookShelf',
    link: '/BookShelf',
    path: 'containers/Bookshelf',
    icon: <BookIcon />,
    exact: true,
    protect: false,
  },
  {
    name: 'UseHook',
    link: '/UseHook',
    path: 'containers/UseHook',
    icon: <BookIcon />,
    exact: true,
    protect: false,
  },
  {
    name: 'Notion',
    link: '/Notion',
    path: 'containers/Notion',
    icon: <BookIcon />,
    exact: true,
    protect: false,
  },
  {
    name: 'IndexedDB',
    link: '/IndexedDB',
    path: 'containers/IndexedDB',
    icon: <BookIcon />,
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
    name: 'Logout',
    link: '/Logout',
    path: 'containers/Logout',
    icon: <LogoutIcon />,
    exact: true,
    protect: false,
  },
  {
    name: 'Register',
    link: '/SignUp',
    path: 'containers/SignUp',
    icon: <DashboardIcon />,
    exact: true,
    protect: false,
  },
  {
    name: 'About',
    link: '/About',
    path: 'containers/About',
    icon: <DashboardIcon />,
    //exact: true,
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
    name: 'Company',
    link: '/Company',
    menu: 'Company',
    path: 'containers/Company',
    icon: <PersonIcon />,
    exact: true,
    protect: true,
  },
  {
    name: 'Settings',
    link: '/Settings',
    menu: 'Settings',
    path: 'containers/Settings',
    icon: <SettingsIcon />,
    exact: true,
    protect: true,
  }
]

//export { privateMenu, publicMenu, Menu };
export { Menu };

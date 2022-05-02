import React from "react";
import { Link } from 'react-router-dom';
import SidebarOption from '../../../components/SidebarOption';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';

import './Sidebar.css';

const Sidebar = (props) => {

  return (
    <section className="sidebar">
      <div className='sidebar__options'>
        <SidebarOption title={'Dashboard'} IconComp={DashboardIcon} link="/Dashboard" />
        <SidebarOption title={'Company'} IconComp={AssignmentIndIcon} link="/Company" />
        <SidebarOption title={'Settings'} IconComp={SettingsIcon} link="/Settings" />
      </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/Settings">Settings</Link></li>
        </ul>
      </nav>
    </section>
  );
}

export default Sidebar;

import React, { useState } from 'react'

import SidebarOpt from "./SidebarOpt"

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@material-ui/icons/Book';
import { IoIosArrowBack } from 'react-icons/io';
import { VscThreeBars } from 'react-icons/vsc';
import { GiBearFace } from 'react-icons/gi';

import clsx from "clsx";

import "./sidebar.css"
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {

  const DemoAppRedux = useSelector((state) => state.DemoApp);
  const dispatch = useDispatch();

  const [barSt, setBarSt] = useState('f'); // f: full ; s: small ; n: hide

  return (

    <div className="sidebar">
      <div className='sidebar__bg'></div>
      <div className='sidebar__top'>
        <div className='sidebar__companylogo'>
          <GiBearFace /> <div className='sidebar__companylogo__text'>Your Company</div>
        </div>
      </div>
      <div className='sidebar__items'>
        <SidebarOpt title={'Demo Home'} IconComp={HomeIcon} link="/DemoApp" />
        <SidebarOpt title={'Message'} IconComp={HomeIcon} link="/DemoApp/Message" />
        <SidebarOpt title={'Book Shelf'} IconComp={HomeIcon} link="/DemoApp/Bookshelf" />
        <SidebarOpt title={'Google Drive'} IconComp={BookIcon} link="/DemoApp/GoogleDrive" />
        <SidebarOpt title={'Remote CRUD Demo'} IconComp={BookIcon} link="/DemoApp/RemoteCRUD" />
        <SidebarOpt title={'Local MERN Demo'} IconComp={BookIcon} link="/DemoApp/LocalCRUD" />
        <SidebarOpt title={'Go Back Main'} IconComp={IoIosArrowBack} link="/" />

        {/* <SidebarOpt title={'Book Shelf'} IconComp={BookIcon} link="/Bookshelf" />
        <SidebarOpt title={'Notion'} IconComp={BookIcon} link="/Notion" />
        <SidebarOpt title={'Use Hook'} IconComp={BookIcon} link="/UseHook" />
        <SidebarOpt title={'Sign Up'} IconComp={PersonIcon} link="/SignUp" />
        <SidebarOpt title={'Sign In'} IconComp={PersonIcon} link="/Login" />
        <SidebarOpt title={'About'} IconComp={InfoIcon} link="/About" /> */}
      </div>
      <div className='sidebar__footer'>
        <div className='backicon' onClick={
          e => {
            dispatch({
              type: 'setSidebarStatus',
              payload: DemoAppRedux.SidebarStatus === 's' ? 'f' : 's'
            })
          }
        }>
          <IoIosArrowBack />
        </div>
      </div>
    </div>

  )
}

export default Sidebar
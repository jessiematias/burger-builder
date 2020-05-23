import React from "react";
import "./Layout.styles.css";
import Toolbar from '../Navigation/Toolbar/Toolbar.component'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.component'

const Layout = props => (
  <>
    <Toolbar />
    <SideDrawer />
    <main className='content'>{props.children}</main>
  </>
);

export default Layout;

//finished 29 

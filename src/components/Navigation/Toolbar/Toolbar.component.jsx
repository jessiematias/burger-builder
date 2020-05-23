import React from 'react';
import './Toolbar.styles.css'
import Logo from '../../Logo/Logo.component'
import NavigationItems from '../NavigationItems/NavigationItems.component'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle.component'


const Toolbar = (props) => (
    <header className='Toolbar'>
      <DrawerToggle clicked={props.drawerToggleClicked} />
        <Logo height='80%' />
        <nav className='DesktopOnly'>
          <NavigationItems />
        </nav>
    </header>
)

export default Toolbar  
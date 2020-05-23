import React from 'react';
import Logo from '../../Logo/Logo.component'
import NavigationItems from '../NavigationItems/NavigationItems.component'
import './SideDrawer.styles.css'

const SideDrawer = (props) => {

    return (
        <div className='SideDrawer'>
             <Logo height='11%' />
             <nav>
                 <NavigationItems />
             </nav>
        </div>
    )
}

export default SideDrawer
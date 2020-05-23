import React from 'react';
import './Toolbar.styles.css'
import Logo from '../../Logo/Logo.component'
import NavigationItems from '../NavigationItems/NavigationItems.component'


const Toolbar = (props) => (
    <header className='Toolbar'>
        <div>MENU</div>
        <Logo height='80%' />
        <nav>
          <NavigationItems />
        </nav>
    </header>
)

export default Toolbar 
import React from 'react';
import './DrawerToggle.styles.css'

const DrawerToggle = (props) => (
    <div className='DrawerToggle' onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default DrawerToggle
import React from 'react';
import burgerLogo from '../../assets/img/burger-logo.png'
import './Logo.styles.css'

const Logo = (props) => (
    <div style={{height: props.height}} className='Logo'>
        <img src={burgerLogo} alt="burger logo"/>
    </div>
)

export default Logo
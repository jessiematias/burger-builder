import React from 'react';
import './NavigationItems.styles.css'
import NavigationItem from './NavigationItem/Navigationitem.component'

const NavigationItems = () => (
<ul className='NavigationItems'>
    <NavigationItem link='/' active >Burger Builder</NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem>
</ul>
)

export default NavigationItems
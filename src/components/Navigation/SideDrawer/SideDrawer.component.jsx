import React from "react";
import Logo from "../../Logo/Logo.component";
import NavigationItems from "../NavigationItems/NavigationItems.component";
import "./SideDrawer.styles.css";
import Backdrop from "../../UI/Backdrop/Backdrop.component";

const SideDrawer = props => {

  let attachedClasses =['SideDrawer', 'Close']
  if (props.open) {
   attachedClasses = ['SideDrawer', 'Open']
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <Logo height='11%' />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;

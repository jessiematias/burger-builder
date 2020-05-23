import React, {Component} from "react";
import "./Layout.styles.css";
import Toolbar from '../Navigation/Toolbar/Toolbar.component'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.component'

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  sideDrawerHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
    this.setState(prevState =>  {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }



  render () {
    return (
      <>
      <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
      <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerHandler} />
      <main className='content'>{this.props.children}</main>
    </>
    )
  }

}


export default Layout;

//finished 29 

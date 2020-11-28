import React , {useState}from 'react';
import {
  AppBar, Toolbar, Typography, Avatar
} from '@material-ui/core';
import './TopBar.css';
import logo from '../../images/logo.jpg'
/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      type: "a"
    }
  }
  
  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar className="toolbar">
          <div>18B1NUM1673</div>
          <div>{this.state.type}</div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;

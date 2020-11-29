import React , {useState}from 'react';
import {
  AppBar, Toolbar, 
} from '@material-ui/core';
import { Link } from "react-router-dom";
import './TopBar.css';
import logo from '../../images/logo.jpg'
/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let text='';
     if( this.props.screenType !== null &&  this.props.songogdsnUser !== null) {
      switch(this.props.screenType){
        case 'detail': text = this.props.songogdsnUser.first_name; break;
        case 'photo': text = "Photos of "+ this.props.songogdsnUser.first_name; break;
        case 'home': text =" " ;break;
      } 
    }
    else {
        text=" "
    }
  
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar className="toolbar">
          <div>18B1NUM1673</div>
          <div>{ text }</div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;

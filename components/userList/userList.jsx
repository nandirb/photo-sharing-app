import React, {useState} from 'react';

import {
  List, ListItem,
  ListItemText,
  Divider,
  Avatar,
}
from '@material-ui/core';
import './userList.css';


/**
 * Define UserList, a React componment of CS142 project #5
 */

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
  }
  render() {
    console.log("UL props--", this.props)
    const { users, userSongoh } = this.props  
    return (
      <div>

        {
          users.map(el=> <Li el= {el} userSongoh={userSongoh} />)
        }
        
      </div>
    );
  }
}

const Li = (props) => {
  console.log("Li props--", props)
  return(
    <div>
      <ListItem onClick={()=> props.userSongoh(props.el)} className="listitem" >
          <Avatar alt="logo"  />
          <ListItemText primary={props.el.first_name +" "+props.el.last_name}/>
      </ListItem>
     <Divider />
     </div>
  )
}
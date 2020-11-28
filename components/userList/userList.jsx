import React, {useState} from 'react';

import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  Avatar,
  Badge
}
from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './userList.css';


/**
 * Define UserList, a React componment of CS142 project #5
 */

 
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 0,
    top: 5,
    background: "#00e676",
  },
}))(Badge)


class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.clickUser(e);
  }
  render() {
    console.log("userlist dotorh props--", this.props)
    const { users, clickUser } = this.props
    const usersInfo = users.map( el=> {
      
      return(
        <div className="user_list">
          <StyledBadge overlap="circle" variant="dot" >
             <Avatar alt="logo"  />
          </StyledBadge>
          <ListItem className="aa" key= {el._id}   
            onClick={ this.handleClick} >
            <ListItemText primary= {`${el['first_name']} ${el['last_name']}`}/>
          </ListItem>
         <Divider />
        </div>

      ) 
    })
    return (
      <div>
        <List component="nav">
        {usersInfo}
        </List>
      </div>
    );
  }
}

export default UserList;

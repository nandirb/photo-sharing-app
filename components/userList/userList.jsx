  import React, {useState} from 'react';
  import {Link} from 'react-router-dom'
import {
  List, ListItem,
  ListItemText,
  Divider,
  Avatar,
}
from '@material-ui/core';
import './userList.css';
import UserDetail from '../userDetail/userDetail'
/**
 * Define UserList, a React componment of CS142 project #5
 */
export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
     users: window.cs142models.userListModel(),
    }
  }
  render() {
    return (
      <div>
         {
          this.state.users.map((el, i) => {
            return (
              <Link key={i} to={`/users/${el._id}`}>
                <ListItem>
                  <ListItemText primary={`${el.first_name} ${el.last_name}`} />
                </ListItem>
                <Divider/>
              </Link>
            )
          })
         }
      </div>
    );
  }
}
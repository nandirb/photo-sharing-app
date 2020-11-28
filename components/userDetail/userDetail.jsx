import React , {useState, useEffect}from 'react';
import { Link } from "react-router-dom";
import {
  Avatar,
  Typography
} from '@material-ui/core';
import './userDetail.css';
import Axios from 'axios';

/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const user = this.props.songogdsnUser
    return (
      <div>
        <h1>{user.first_name} {user.last_name}</h1>
        <p>{user.occupation}</p>
        <strong> {user.description}</strong>
        <p>{user.location}</p>
      </div>
    );
  }
}

export default UserDetail;

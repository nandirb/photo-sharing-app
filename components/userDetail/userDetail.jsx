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
    this.state={
      users:[]
    }
  }

  render() {
    console.log("in the userDetail")
    return (
      <Typography variant="body1">
        This should be the UserDetail view of the PhotoShare app. Since
        it is invoked from React Router the params from the route will be
        in property match. So this should show details of user:
        {this.props.match.params.userId}. You can fetch the model for the
        user from window.cs142models.userModel(userId).
      </Typography>
      
    );
  }
}

export default UserDetail;

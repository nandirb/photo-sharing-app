import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Route, Switch, Link 
} from 'react-router-dom';
import {
  Grid, Typography, Paper
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './styles/main.css';

// import necessary components
import TopBar from './components/topBar/TopBar';
import UserDetail from './components/userDetail/UserDetail';
import UserList from './components/userList/UserList';
import UserPhotos from './components/userPhotos/UserPhotos';


class PhotoShare extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      users: window.cs142models.userListModel(),
      userId : null
    }
    this.setUserId = this.setUserId.bind(this)
  }
 setUserId(user) {
  console.log("ps dotor:", user.target)
  this.setState({userId: user});
}
  render() {

                                          {/*---------------------------------------------------- */}
    return (
      <HashRouter>
      <div>
      <Grid container spacing={8}>
      {/*-------------------------------------------------------------------TOP BAR-------------------------------------------------------------------------------- */}
        <Grid item xs={12}>
          <TopBar/>
        </Grid>
        <div className="cs142-main-topbar-buffer"/>  
      {/*-------------------------------------------------------------------USER LIST----------------------------------------------------------------------------- */}
        <Grid item sm={3}>
          <Paper  className="cs142-main-grid-item">
          <UserList clickUser={this.setUserId} users={this.state.users}/>  

          </Paper>
        </Grid>

      {/*--------------------------------------------------------ZURAG ESVEL MEDEELEL HARRUULAH HESEG--------------------------------------------------------------- */}
        <Grid item sm={9}>
          <Paper className="cs142-main-grid-item">
          <Switch>
            <Route exact path="/"
                render={     
                  ({history}) =>{
                  <Button variant="contained" color="secondary" onClick={() => { history.push('/users/:userId') }}>
                    <p>usersDetail</p>
                  </Button>  
                }
                  
                  
                }/>


              <Route path="/users/:userId"
                render={ props => <UserDetail {...props} /> }
              />
              
              <Route path="/photos/:userId"
                render ={ props => <UserPhotos {...props} userId={this.state.userId}  /> }
              />

              <Route path="/users" component={UserList}  />
            </Switch>


          </Paper>
        </Grid>
      </Grid>
      </div>
    </HashRouter>
    );
  }
}


ReactDOM.render(
  <PhotoShare />,
  document.getElementById('photoshareapp'),
);

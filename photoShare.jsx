import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Route, Switch, Link 
} from 'react-router-dom';
import {
  Grid, Typography, Paper, Divider
} from '@material-ui/core';
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
      songogdsnUser : null,
      screenType: "home"
    }
    this.userSongoh = this.userSongoh.bind(this)
    this.screenTypeSolih= this.screenTypeSolih.bind(this)
  }
  userSongoh(user){
    this.setState({
      songogdsnUser: user
    })
  }
  screenTypeSolih(screen){
    this.setState({
      screenType: screen
    })
  }
  render() {
                                          {/*---------------------------------------------------- */}
    return (
      <HashRouter>
      <div>
      <Grid container spacing={8}>
      {/*-------------------------------------------------------------------TOP BAR-------------------------------------------------------------------------------- */}
        <Grid item xs={12}>
          <TopBar screenType= {this.state.screenType} songogdsnUser={this.state.songogdsnUser}/>
        </Grid>
        <div className="cs142-main-topbar-buffer"/>  
      {/*-------------------------------------------------------------------USER LIST----------------------------------------------------------------------------- */}
        <Grid item sm={3}>
          <Paper  className="cs142-main-grid-item">
          <UserList userSongoh={this.userSongoh}/>  
          <Divider />
          <Link  to={`/users/`}>
            See all users
            </Link>
          </Paper>
        </Grid>

      {/*--------------------------------------------------------ZURAG ESVEL MEDEELEL HARRUULAH HESEG--------------------------------------------------------------- */}
        <Grid item sm={9}>
          <Paper className="cs142-main-grid-item">
          <Switch>
              <Route exact path="/" component={Home}
                  
                />


              <Route path="/users/:userId"
                render={ props => <UserDetail {...props} userSongoh={this.userSongoh} screenTypeSolih={this.screenTypeSolih} /> }
              />
              
              <Route path="/photos/:userId"
                render ={ props => <UserPhotos {...props} userSongoh={this.userSongoh} screenTypeSolih={this.screenTypeSolih}  /> }
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
const Home = () => {
 
  return(
    <div>
      hehe
     </div>
  )
}

ReactDOM.render(
<PhotoShare />
  ,
  document.getElementById('photoshareapp'),
);

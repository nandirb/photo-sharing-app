import React from 'react';
import { Link } from "react-router-dom";
import {
  Button,
} from '@material-ui/core';
import './userDetail.css';


/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //usermodel deh data-gaa statedee hadgalah
      ...window.cs142models.userModel(this.props.match.params.userId),

      //tuhain hereglegchiin zuragnuud
      photos : window.cs142models.photoOfUserModel(props.match.params.userId)
    }
    this.props.userSongoh( this.state)
    this.props.screenTypeSolih("detail")
  }
  componentDidUpdate(prevprop) {
    //uur user deer click hiivel update hiij state-iig shine user-iinheer uurchluh
    if (prevprop.match.params.userId !== this.props.match.params.userId) { 
      this.setState({...window.cs142models.userModel(this.props.match.params.userId),
         photos : window.cs142models.photoOfUserModel(this.props.match.params.userId)})
    }
  }
  render() {
   
    return (
      <div>
        <div className="userDetail">
        <div className="img">
           <img src={`images/${this.state.photos[0].file_name}`} alt=""/>
        </div>
        <div className="info">
            <h1>{this.state.first_name+" "+this.state.last_name}</h1>
            <h3>📍 {this.state.location}</h3>
            <p>👨‍🎓 {this.state.occupation} </p>
            <p>🔖 {this.state.description} 🔖 </p>
            
            <Link to={`/photos/${this.state._id}`}>
             <Button variant="outlined"  color="secondary"  >
              See Photos of {this.state.first_name}
              </Button>
            </Link>
        </div>
      </div> 
      </div>
    );
  }
}


export default UserDetail;

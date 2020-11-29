import React from 'react';
import {
  Typography
} from '@material-ui/core';
import './userPhotos.css';
import { Photo } from '@material-ui/icons';

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
export default class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...window.cs142models.userModel(props.match.params.userId),
      photos:window.cs142models.photoOfUserModel(props.match.params.userId)
    }
    this.props.screenTypeSolih("photo")
    
  }
  componentDidUpdate(prevprop) {
    if (prevprop.match.params.userId !== this.props.match.params.userId) {
      photos:window.cs142models.photoOfUserModel(this.props.match.params.userId)
    }
    
  }
  render() {
    const { photos } = this.state
    console.log(photos)
    return (
      <div>

      <div className="userDetail">
          <div className="img ">
             <img src={`images/${this.state.photos[0].file_name}`} alt=""/>
          </div>
          <div className="info">
             <h1>{this.state.first_name+" "+this.state.last_name}</h1>
             <h3>📍 {this.state.location}</h3>
             <p>👨‍🎓 {this.state.occupation} </p>
             <p>🔖 {this.state.description} 🔖 </p>
          </div>
      </div>

      <div className="userphotos">
       {
          photos.map( (el, i) =>{
            return(
              <PhotoCard key={i} el={el}/>
            )
          }) 
       }
      </div>


    </div>
    );
  }
}
const PhotoCard = (props)=>{
  console.log(props)
return(
  <div>
    photo
  </div>
)
}
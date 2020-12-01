import React from 'react';
import Axios from "axios"
import Card from "./Card"
import './userPhotos.css';

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
export default class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      photos: null,
      popUp: false
    }
    this.popUpPhoto = this.popUpPhoto.bind(this)
  }
  popUpPhoto(){
    console.log("popup imniidaaaaa")
    this.setState({popUp: true})
  }
  componentDidMount(){
    Axios.get('http://localhost:3000/photosOfUser/'+this.props.match.params.userId)
    .then((response) => {
      this.setState({photos: response.data})
    })

   Axios.get('http://localhost:3000/user/'+this.props.match.params.userId)
    .then((response) => {
      this.setState({user: response.data})
    })
  }
  render() {
    console.log("manai state", this.state)
    return (
        <div>
          {
          this.state.user !== null &&  this.state.photos !== null ? (
          <div>
            <div className="userDetail">
               <div className="img "> <img src={`images/${this.state.photos[0].file_name}`} alt=""/>  </div>
               <div className="info">
                 <h1>{this.state.user.first_name+" "+this.state.user.last_name}</h1>
                 <h3>📍 {this.state.user.location}</h3>
                 <p>👨‍🎓 {this.state.user.occupation} </p>
                <p>🔖 {this.state.user.description} 🔖 </p>
               </div>
             </div>
             <div className="photogrid">
                 {
               this.state.photos !== null ? (
                 
                    this.state.photos.map((el, i) => <Card key={i} data={el}/>) 
                 
                )
              :
              "zurag" 
                }
            </div>
          </div>
          ) 
          :  
          <p>loading</p>
        }
        </div>
         
    );
  }
}
const Pic = (props)=>{
  console.log("pic props  ",props)
return(
  <div className="photogrid">
   <img className="eachPhoto" src={`../images/${props.el.file_name}`} />
  </div>
)
}
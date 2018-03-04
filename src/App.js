import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(){
  super ();
  this.state = {
 friends: [],
  picture: '',
  name: '',
  }
}
updatePicture(val){
  this.setState({picture:val})
}
updateName(val){
  this.setState({name:val})
}
addFriend(){
  let friend = {
    name: this.state.name,
    picture: this.state.picture,
  }
  let newArr = this.state.friends.slice(0)
  newArr.push(friend)
  this.setState({
    friends: newArr,
    picture: "",
    name: "",
  })
}
  render() {
    let friends = this.state.friends.map( (friend, index) => (<div key= {index}>
    <img width = "100px" height = "100px" src = { friend.picture } />
    <span>{friend.name}</span>
    </div>)
    );
    return (
      <div className="App">
      <span>Picture</span><input onChange= {(e)=> this.updatePicture(e.target.value)} value={ this.state.picture}/>
      <span>Name</span><input onChange= {(e)=> this.updateName(e.target.value)} value={ this.state.name}/>
      <button onClick = {()=>this.addFriend()}>Add Friend</button>   
      {friends}

      </div>
    );
  }
}

export default App;

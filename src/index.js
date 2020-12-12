//day1-- validation using react

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
class Car extends React.Component{
  constructor(props){
    super(props);
  this.state={
    brand:"ford",
    model:"retro",
    price:1964,
    username:'',
    password:'',
    color:"blue"
  };
}

changeusername=(event) => {
  this.setState({username:event.target.value});
}

changepassword=(event) => {
  this.setState({password:event.target.value});
}

display = (event) => {
let n=event.target.name;
let v=event.target.value;

this.setState({[n]: v});

}

  render(){
    if(this.state.username=="Pr" &this.state.password=="Pr")
    {
      alert("Right Credientials");
    }
  return (
    <div><label>UserName:</label><input type="text" name="uname" onChange={this.changeusername}></input>
  <label>Password:</label><input type="text" name="pass" onChange={this.changepassword}></input>  
   
    
    </div>
 
    
  )
  } 
}

ReactDOM.render(<Car />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

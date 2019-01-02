import React, { Component } from 'react';
import {Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@material-ui/core';
import './Valid.css';

class Valid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // fields: {},
      // errors: {},
      email: '',
      name: '',
      emailerr: '*',
      nameerr: '*',
      passerr: '',
      password: '',
      emailvalid: false,
      namevalid: false,
      passvalid: false,
    };
  }

  handleChange = (event) => {       
      const val = event.target.id;
      if(val === 'email')
      {
        console.log('Email entered');
        this.setState({email: event.target.value });
      }
      if(val === 'name')
      {
        this.setState({name: event.target.value });
      }
      console.log("current: "+ event.target.value);
      this.handleValidation();
  }

  validateEmail = (event) => {
    //EMAIL
    let isValid = false;
    this.setState({email: event.target.value });
    if(!event.target.value){
      isValid = false;
      this.setState({emailvalid: false});
      this.setState({emailerr: "Cannot be empty"});
    }

    if(typeof event.target.value !== "undefined"){
       if (!event.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        isValid = false;
        this.setState({emailvalid: false});
        this.setState({emailerr: "Email is not valid"});
        }
        if (event.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
          this.setState({emailerr: ""});
          isValid = true;
          this.setState({emailvalid: true});
        }
   } 
   return isValid;
  }


  validateName = (event) => 
  {
    let isValid = false;
    //Name
    this.setState({name: event.target.value});
    if(typeof event.target.value !== "undefined"){
      if(!event.target.value.match(/^([A-Za-z]+\s)*[A-Za-z]+$/)){
      this.setState({nameerr: "Not valid name."});
      isValid = false;
      this.setState({namevalid: false});
      }
      if(event.target.value.match(/^([A-Za-z]+\s)*[A-Za-z]+$/)){
        this.setState({nameerr: ""});
        isValid = true;
        this.setState({namevalid: true});
      }        
    }
    return isValid;
  }


  validatePass = (event) => 
  {
    //Minimum eight characters, at least one letter, one number and one special character:
    this.setState({ password: event.target.value });
      if (typeof event.target.value !== "undefined") {
        if (!event.target.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@_$!%*#?&])[A-Za-z\d@_$!%*#?&]{8,}$/)) {
          this.setState({ passerr: "Not a valid pass." });
          this.setState({ passvalid: false });
        }
        if (event.target.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@_$!%*#?&])[A-Za-z\d@_$!%*#?&]{8,}$/)) {
          this.setState({ passerr: "" });
          this.setState({ passvalid: true });
        }
      }
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.emailvalid && this.state.namevalid)
    {
      console.log(this.state);
      this.setState( {email: '',
      name: '',
      emailerr: '*',
      nameerr: '*',
      emailvalid: false,
      namevalid: false});
    } else {

    }
  }

  render(){
      return (
         <div className="main">
           <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Email</label>
            <input refs="email" type="text" id="email" onChange={this.validateEmail} value={this.state.email}/>
            <span style={{color: "red"}}>{this.state.emailerr}</span>
            <br></br><br></br>
            <label>Name</label>
            <input type="text" id="name" onChange={this.validatePass} value={this.state.name}/>
            <span style={{color: "red"}}>{this.state.nameerr}</span>
            <br></br><br></br>
            <label>Password</label>
            <input type="text" id="pass" onChange={this.validatePass} value={this.state.password}/>
            <span style={{color: "red"}}>{this.state.passerr}</span>
            <br></br><br></br>
            <Button variant="contained" 
             type="submit"
              color="primary" 
              fullWidth
              disabled= 
              {(this.state.validatePass && this.state.emailvalid) ? false : true}
              >Submit</Button>
            </form>
         </div>
    )
  }
}

export default Valid;

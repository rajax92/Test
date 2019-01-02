import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Test from './test';
import {Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@material-ui/core'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {id: 'as12', name: 'John', age: "27", email: "John@mail.com", pass: "habib27",},
        {id: 'as13', name: 'Bob', age:  "29", email: "bob@mail.com", pass: "bob29",},
        {id: 'as14' ,name: 'Alex', age: "24", email: "alex@mail.com", pass: "alex24",}
      ]
      ,showPersons: false, open: false, isLogin: false,
      emailInput: '', passInput: '', valueOne: '', valueTwo: '', isValid: true
    }
  }

  nameChange = (event, id) => {
    const personindex = this.state.persons.findIndex(p => { 
      return p.id === id;
      });

      const person = {
        ...this.state.persons[personindex]
      };

      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personindex] = person;
    this.setState({persons: persons});
  }

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonHandler =() => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleLogin = () => {
    const personindex = this.state.persons.findIndex(p => { 
      return p.email === this.state.emailInput;
      });
      console.log(this.state.emailInput);
      const person = {
        ...this.state.persons[personindex]
      };
      console.log(person);
      if(person.pass === this.state.passInput)
      {
        this.setState({ isLogin: true });
        console.log('Login Passed');
      }
      else
      {
        console.log('Login Failed');
      }
  }

  handleChange = (event) => {
    event.persist();
    const val = event.target.id;
    this.setState({isValid: false});
    if(val === 'email')
    {
      this.setState({emailInput: event.target.value });
    }
    if(val === 'password')
    {
      this.setState({passInput: event.target.value });
    }
  }

  render() {

    let persons = null;
    if (this.state.showPersons)
    {
      persons = (
      <div>
        {
          this.state.persons.map((person,index) => {
            return <Person 
            click= {()=> this.deletePerson(index)}
            name = {person.name}
            age = {person.age} 
            key = {person.id}
            changed = {(event) => this.nameChange(event,person.id)}
            />
            })
        }
          </div>
      );
    }

    const lPad = {
      marginLeft: 50
    };

    return (
      <div className="App">
        <h3>Hi, this is my first react app. It is {new Date().getDate()}</h3>
        <Button variant="contained" color="primary" onClick={this.togglePersonHandler}>Toggle</Button>
        <Button variant="contained" color="primary" style= {lPad} onClick={this.handleClickOpen} >Login</Button>
        {persons}
        <h3>Bye</h3>
        
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your login details down below.
            </DialogContentText>
            
            <TextField autoFocus 
            id="email" 
            helperText="Some important text"
            margin="normal"
            variant="outlined"
            value={this.state.emailInput} label="Email Address"
            type="email"  fullWidth 
            onChange={this.handleChange} />

            <br></br>
            <TextField id="password" 
            helperText="Some important text"
            margin="normal"
            variant="outlined"
            value={this.state.passInput} label="Password" 
            type="password" fullWidth 
            onChange={this.handleChange} />

          </DialogContent>
          <DialogActions className="center">
              <Button variant="contained" color="secondary" onClick={this.handleClose}>Cancel</Button>
              <Button variant="contained" 
              color="primary" 
              disabled={this.state.isValid}
              onClick={this.handleLogin}>Login</Button>
          </DialogActions>
        </Dialog>
    </div>
    );
  }
}

export default App;

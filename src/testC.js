import React from 'react';
import { TextField, Button, Divider } from '@material-ui/core';

const bStyle = {
  marginTop: '25px',
  width: '70%',
};

const login = () => (
  <div className="loginDiv">
    <h2> Login</h2>
    <TextField autoFocus margin="dense" id="email" label="UserName: " type="email" fullWidth />
    <TextField margin="dense" id="pass" label="Password: " type="password" fullWidth />
    <Divider />
    <Button style={bStyle} variant="contained" color="primary" onClick={this.handleEvent}> Login </Button>
  </div>
);
export default login;

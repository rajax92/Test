import React from 'react';
import { TextField } from '@material-ui/core';

const test = (props) => {
  return (
    <div>
      <input type="text" value={props.email} onChange={props.echanged} />
    </div>
  )
}

export default test;

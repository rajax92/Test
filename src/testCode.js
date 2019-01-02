import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './App.css';

const initialState = {
    firstname: '',
    lastname: '',
};

export class testCode extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (
            <div className="testDiv">
                <div>
                    <TextField
                        name="firstname"
                        value={this.state.firstname}
                        label="First Name"
                        onChange={this.handleChange}/>
                    <TextField
                        name="lastname"
                        value={this.state.lastname}
                        label="Last Name"
                        onChange={this.handleChange}/>
                </div>
                <div>
                    <Button onClick={this.onClick} >Submit</Button>
                </div>
            </div>
        );
    }

    onClick = () => {
        console.log(this.state.firstname);
        console.log(this.state.lastname);
      }
      
    handleChange = (event) => {
      event.persist();
      const val = event.target.name;
      if(val === 'firstname')
      {
        console.log('FIRST NAME ENTERED');
        this.setState({firstname: event.target.value });
      }
      else
      {
        console.log('LAST NAME ENTERED');
        this.setState({lastname: event.target.value });
      }
    }

}
export default testCode;

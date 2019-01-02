import React from 'react';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';
const styles = theme => ({
buttonCollapse: {
[theme.breakpoints.up('md')] : {
display: 'none'
},
margin: '10px',
boxShadow: 'none'
}
});
class ButtonAppBarCollapse extends React.Component {
constructor(props){
super(props);
this.state = {
wrapper: this.props.dataTarget.replace(/#/,''),
listMenus: this.props.menu
};
this.toggleCollapse = this.toggleCollapse.bind(this);
}
toggleCollapse(e){
e.preventDefault();
let collapsed = document.getElementById(this.state.wrapper);
if(collapsed.style.display === 'block'){
collapsed.style.display = 'none';
}
else {
collapsed.style.display = 'block';
collapsed.style.backgroundColor = '#fff';
collapsed.style.top = '50px';
collapsed.style.textAlign = 'center';
collapsed.style.width = '240px';
collapsed.style.position = 'absolute';
collapsed.style.zIndex = 1450;
}
}
render(){
const classes = this.props.classes;
return (
<IconButton className={this.props.classes.buttonCollapse} onClick={this.toggleCollapse}><b className="mdi mdi-home"></b></IconButton>
);
}
}
ButtonAppBarCollapse.propTypes = {
classes: PropTypes.object.isRequired
}
export default ButtonAppBarCollapse;

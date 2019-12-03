import React, { Component} from "react";
import Radium from "radium";

class ControlBar extends Component{
	
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }; 
  }
  render(){
  	const orientation = this.props.orientation;
  	const max = this.props.max;
  	const controls = this.props.controls;
  	let ctrls = this.props.controls.slice(this.state.index, max+this.state.index);
  	let ctrlShowed = ctrls.map((control)=><li style={{display: "inline"}}>{control}</li>);
  	let enableLeft = this.state.index > 0;
  	let enableRight = this.state.index + max < this.props.controls.length;
  	let left = <li style={{display: 'inline'}}>
  								<span key="left" style={[styles.unselectable, enableLeft?styles.enabled:styles.disabled ]} onClick={this.decrease.bind(this)}>{"\u25BC"}</span>
  						 </li>;
  	let right = <li style={{display: 'inline'}}>
  								<span key="right" style={[styles.unselectable, enableRight?styles.enabled:styles.disabled ]} onClick={this.increase.bind(this)}>{"\u25B2"}</span>
  							</li>;
  	let styleUl = {listStyleType: 'none', margin: 0, padding: 0, overflow: 'hidden'};
    return(
      <ul style={styleUl}>
      	{left}
        {ctrlShowed}
        {right}
      </ul>      
    );
  }
  decrease(){
  	let next = this.state.index - 1;
  	if (next>=0)this.setState({index: next});
  }
  increase(){
  	let next = this.state.index + 1;
  	if(next <= this.props.controls.length - this.props.max) this.setState({index: next});
  }
}

var styles = {
	unselectable: {
		'-webkit-touch-callout': 'none',
		'-webkit-user-select': 'none',
		'-khtml-user-select': 'none',
		'-moz-user-select': 'none',
		'-ms-user-select': 'none',
		'user-select': 'none'
	},
  enabled: {
    color: '#3cb371',
    cursor: 'pointer',

    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      color: '#0000ff'
    }
  },

  disabled: {
   color: '#d4d4d4'
  }
};

export default  Radium(ControlBar);
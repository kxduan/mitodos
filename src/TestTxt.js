import React, { Component} from "react";
import KdComponent from "./KdComponent.js";

class TestTxt extends KdComponent{	
  constructor(props) {
    super(props);
    this.state = { 
    	tmp:props.time   	
    }; 
    this.reset.bind(this);
  } 
  reset(){
  	this.setState({tmp:this.props.time});
  }  
    
  render(){
  	return (<div><input type="text" value={this.state.tmp} onChange={this.changed.bind(this)}/><input type="button" value="reset" onClick={this.clicked.bind(this)}/></div>);
  }
  
  changed(e){
  	this.setState({tmp:e.target.value});
  	if(this.kdCompCallbackEnabled) this.kdCompCallback(e.target.value);
  }
}

export default  TestTxt;
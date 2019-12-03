import React, { Component} from "react";
import KdComponent from "./KdComponent.js";
import TimeInput from "./TimeInput.js";

class EventEdit extends KdComponent{	
  constructor(props) {
    super(props);
    this.state = { 
    	start:props.start, 
    	end:props.end, 
    	title:props.title, 
    	content:props.content    	   	
    }; 
  } 
  render(){
  	const styleCp = {verticalAlign: "top", textAlign: "right", padding: "5px"};
  	const styleTd = {verticalAlign: "top", textAlign: "left", padding: "5px"};
  	const txtTimes = <div><TimeInput time={this.state.start} />-<TimeInput time={this.state.end} /></div>;
  	const txtTitle = <input type="text" value={this.state.title} onChange={this.titleChanged.bind(this)}/>;
  	const txtContent = <textarea rows="4" cols="50" value={this.state.content} onChange={this.contentChanged.bind(this)}/>;  																																					
    return (
    	<table>
    		<tr><td colspan="2" style={styleCp}><input type="button" value="Reset" onClick={this.reset.bind(this)}/> <input type="button" value="Save"/></td></tr>
    		<tr><td style={styleCp}>Start Time:</td><td style={styleTd}><TimeInput time={this.state.start} interceptor={this.startChanged.bind(this)} /></td></tr>
    		<tr><td style={styleCp}>End Time:</td><td style={styleTd}><TimeInput time={this.state.end} interceptor={this.endChanged.bind(this)} /></td></tr>
    		<tr><td style={styleCp}>Title:</td><td style={styleTd}>{txtTitle}</td></tr>
    		<tr><td style={styleCp}>Content:</td><td style={styleTd}>{txtContent}</td></tr> 
    	</table>   	
    );
  }
  reset(){
  	this.setState({ 
    	start:this.props.start, 
    	end:this.props.end, 
    	title:this.props.title, 
    	content:this.props.content    	   	
    });
  }
  startChanged(strStart){
  	this.setState({start:strStart});
  }
  endChanged(strEnd){
  	this.setState({end:strEnd});
  }
  titleChanged(e){
  	this.setState({title:e.target.value});
  }
  contentChanged(e){
  	this.setState({content:e.target.value});
  }
}

export default  EventEdit;
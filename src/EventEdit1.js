import React, { Component} from "react";
import KdComponent from "./KdComponent.js";
import TimeInput from "./TimeInput1.js";
import TestTxt from "./TestTxt.js";

class EventEdit extends KdComponent{	
  constructor(props) {
    super(props);
    this.state = { 
    	start:props.start, 
    	end:props.end, 
    	title:props.title, 
    	content:props.content    	   	
    }; 
    this.setters = {
    	start: null,
    	end: null
    };
  } 
  render(){
  	const styleCp = {verticalAlign: "top", textAlign: "right", padding: "5px"};
  	const styleTd = {verticalAlign: "top", textAlign: "left", padding: "5px"};
  	const txtTitle = <input type="text" value={this.state.title} onChange={this.titleChanged.bind(this)}/>;
  	const txtContent = <textarea rows="4" cols="50" value={this.state.content} onChange={this.contentChanged.bind(this)}/>;  																																					
    return (
    	<table>
    		<tr><td colspan="2" style={styleCp}><input type="button" value="Reset" onClick={this.reset.bind(this)}/> <input type="button" value="Save"/></td></tr>
    		<tr><td style={styleCp}>Start Time:</td><td style={styleTd}><TimeInput time={this.state.start} callback={this.startChanged.bind(this)} stateSetter={this.startSetter.bind(this)} /></td></tr>
    		<tr><td style={styleCp}>End Time:</td><td style={styleTd}><TimeInput time={this.state.end} callback={this.endChanged.bind(this)} stateSetter={this.endSetter.bind(this)} /></td></tr>
    		<tr><td style={styleCp}>Title:</td><td style={styleTd}>{txtTitle}</td></tr>
    		<tr><td style={styleCp}>Content:</td><td style={styleTd}>{txtContent}</td></tr>     		
    		<tr><td style={styleCp}>Test1:</td><td style={styleTd}><TestTxt time="original text" clicked={this.peeker} kdCompPeeker={this.peeker}/></td></tr>    		
    		<tr><td style={styleCp}>Test2:</td><td style={styleTd}><TestTxt time="my text" clicked={this.peeker} kdCompCallback={this.testcallback}/></td></tr>
    	</table>   	
    );
  }
  
  peeker(testTxt){
  	console.log("peeker function: "+testTxt.state.tmp);
  	testTxt.reset()
  }
  testcallback(str){
  	console.log("call back function: "+str);
  }
  
  reset(){
  	this.setState({ 
    	title:this.props.title, 
    	content:this.props.content    	   	
    });
    this.setters.start({time:this.state.start});
    this.setters.end({time:this.state.end});
  }
  startSetter(setter){
  	this.setters.start=setter;
  }  
  endSetter(setter){
  	this.setters.end=setter;
  }
  startChanged(strStart){
  	console.log(strStart);
  	this.setState({start:strStart});
  }
  endChanged(strEnd){
  	console.log(strEnd);
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
import React, { Component} from "react";
import EventEdit from "./EventEdit.js";


class EventItem extends Component{	
  constructor(props) {
    super(props);
    this.state = {	
    	fold: true,
    	start: "",
    	end: "",
    	title: "",
    	content: "",    	
    }; 
  }
  render(){
  	const styleTd = {verticalAlign: "top", textAlign: "left", padding: "5px"};
  	const txtContent = <div>{this.props.content}</div>;
  	const txtTimes = <div>{this.props.start}-{this.props.end}</div>;
  	const txtTitle = <div onClick={()=>{this.setState({fold: !(this.state.fold)});}}>{this.props.title}</div>  																																					
    return (
    	<tr><td style={styleTd}>{txtTimes}</td><td style={styleTd}>{txtTitle}{this.state.fold&&txtContent}</td><td style={styleTd}>edit</td></tr>    	
    );
  }
}

function timeChanged(str){
	console.log(str);
}

function Checklist(props){	
	
	let ui = props.events.map(event=>{
  		return (<EventItem start={event.s} end={event.e} title={event.title} content={event.content}/>);
  	}, this);
  return (<div><EventEdit start="10:00" end="10:30" title="This is a title" content="this is the content"/>
  					<table>{ui}</table></div>);
}


export default  Checklist;
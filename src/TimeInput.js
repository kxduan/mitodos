import React, { Component} from "react";
import KdComponent from "./KdComponent.js";

class TimeInput extends KdComponent{	
  constructor(props) {
    super(props);
    this.state = { 
    	tmp:props.time   	
    }; 
  }
  reset(){
  	this.setState({tmp:this.props.time});
  } 
  validate(e){
  	let txt = e.target.value;
  	if (txt.length == 0) {
  		this.setState({tmp:txt});
  		return;
  	}  	
  	if(txt.length>5) return;
		if(txt.length>0) {
			const d = eval("TimeInput.d"+txt.length);
			let regex = new RegExp(d);
			let match = txt.match(regex);
			if(match==null) return;
		}
		//txt = this.formatTime(txt);
		this.callbackTime(txt);
		this.setState({tmp:txt});
		
  }
  
  formatTime(txt){
  	if(txt.length==4) {
  		let regex = new RegExp(TimeInput.timeMask4);
			let match = txt.match(regex);
			if(match!=null) txt = "0"+txt;
		}
		return txt;
  }
  
  callbackTime(txt){
  	if (!this.kdComponentCallbackEnabled) return;
  	if(txt.length==4) {
  		let regex = new RegExp(TimeInput.timeMask4);
			let match = txt.match(regex);
			if(match!=null) {this.kdCompPack.callback(txt); return;}
		}
  	if (txt.length==5) this.kdCompPack.callback(txt);
  }
  
  render(){
  	return (<input type="text" value={this.state.tmp} onChange={this.validate.bind(this)}/>);
  }
}

TimeInput.d1 = "[0-9]";
TimeInput.d2 = "[0-9]:|[01][0-9]|2[0-3]";
TimeInput.d3 = "([0-9]:[0-5])|(([01][0-9]|2[0-3]):)";
TimeInput.d4 = "([0-9]:[0-5][0-9])|(([01][0-9]|2[0-3]):[0-5])";
TimeInput.d5 = "([01][0-9]|2[0-3]):[0-5][0-9]";
TimeInput.timeMask4 = "[0-9]:[0-5][0-9]";
TimeInput.timeMask5 = "([01][0-9]|2[0-3]):[0-5][0-9]";

export default  TimeInput;
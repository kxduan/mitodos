import React, { Component} from "react";
import Calendar from "./Calendar.js";


class Mitodos extends Component{	
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
  	let date = new Date();
		let days = Array(6).fill(null), index, index1;
		for(index=0; index<6; index++){
			let week = Array(7).fill(null);
			for (index1=0; index1<7; index1++) {
				week[index1] = index + "" + index1;
			}
			days[index] = week;
		}
	  return (
	  	<div>    	
	    	<Calendar date={date} days={days} onDayClicked={this.hdlDaychange} /> 
	    </div>
	  );    
  }
  hdlDaychange(e){
  	console.log(this.props.day);  	
  }
}

export default Mitodos;
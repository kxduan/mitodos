import React, { Component} from "react";
import Calendar from "./Calendar.js";
import Checklist from "./Checklist.js";

function dataEvents(){
	let data = [];
	let event = {s:"06:00", e:"07:30", title:"java mitodos", content:"This is a activity of java mitodos."};
	data.push(event);
	event = {s:"07:30", e:"08:00", title:"markham", content:"Tax return."};
	data.push(event);
	event = {s:"08:00", e:"09:30", title:"sports", content:"Sport time now"};
	data.push(event);
	event = {s:"09:30", e:"12:00", title:"audit", content:"Skybird auditing."};
	data.push(event);
	return data;
}

function dataDays(){
	let days = Array(6).fill(null), index, index1;
	for(index=0; index<6; index++){
		let week = Array(7).fill(null);
		for (index1=0; index1<7; index1++) {
			week[index1] = index + "" + index1;
		}
		days[index] = week;
	}
	return days;
}

function hdlDaychange(e){
 	console.log(this.props.day);  	
}

function uiCalendar(){	
  let date = new Date();
	let days = dataDays();
	return (
	 	<div>    	
	  	<Calendar date={date} days={days} onDayClicked={hdlDaychange} /> 
	  </div>
	);    
}

class Mitodos extends Component{	
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
  	return (
  		<div>
  			{uiCalendar()}
  			<Checklist events={dataEvents()} />
  		</div>
  	)
  }  
}

export default Mitodos;
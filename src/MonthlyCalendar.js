import React, { Component} from "react";
import './MonthlyCalendar.css'

function MonthSelector(props){
	let left='\u003C';
	let right = '\u003E';
	return (
		<tr><td >{left}</td><td colspan="5" >August<br/>2018</td><td>{right}</td></tr>
	)
}
function WeekHead(props) {
	return(
		<tr>
			<td>Su</td><td>Mo</td><td>Tu</td><td>We</td><td>Th</td><td>Fr</td><td>Sa</td>
		</tr>
	);
}
function Day(props){
	return (
		<span>{props.date}</span>
	);
}

funtion days(year, month){
	const first = new Date(year, month, 1);	
	const weekday =	first.getDay();
	day = (weekday < 3)? (-6-weekday) : (1-weekday);
	let weeks = [];
	for (wi = 0; wi < 6; wi++) {
		let week = [];
		for (looper = 0; looper < 7; looper++){
			week[looper] = new Date(year, month, day);
			day++;
		}
		weeks[wi] = week;
	}
	return weeks;
}


function Days{
	const first = new Date(year, month, 1);	
	const firstWeekday =	first.getDay();
	let weeks
	let d = 1-firstWeekday;
	let date =  = new Date(year, month, 1-firstWeekday);
	const last = new Date(year, month+1, 0);	
	const lastWeekday =	last.getDay();
	const lastDate = new Date(year, month+1, 6-firstWeekday);
	let result;
	let counter = 0;
	while(date < lastDate){		
		if ((counter % 7)==0) result += <tr>
	}	
	return(
		<tr>
			<td>{days}</td>
		</tr>
	);
	getDays(year, month){
		let first = new Date(year, month, 1);	
		let firstWeekday =	first.getDay();
		let firstDate = new Date(year, month, 1-firstWeekday);
		
		let preLast = new Date(year, month, 0);
		let last = new Date(year, month+1, 0);
		let firstWeekday
		var last = new Date(year, month+1, 0);
	var firstWeekday = first.getDay();
	}
}

class MonthlyCalendar extends Component{	
  constructor(props) {
    super(props);
    this.state = {
    }; 
  }
  render(){
    return(
    	<table>
    		<MonthSelector />
    		<WeekHead />
    	</table>
    );
  }
}

export default  MonthlyCalendar;
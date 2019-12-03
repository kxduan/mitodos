import React, { Component} from "react";
import "./Calendar.css";

class Calendar extends Component{	
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
  	const date = this.props.date;
  	const days = this.props.days;
  	const hdlDayClicked = this.props.onDayClicked;
  	const tdstyle = {color: "red"};
    return(
    	<table>
    		<tr>
    			<td colSpan="7" style={{textAlign: "center" , verticalAlign: "middle" }}><DateInput date={date}/></td></tr>
    		<tr>
					<td style={tdstyle}>Su</td><td class="title">Mo</td><td>Tu</td><td>We</td><td>Th</td><td>Fr</td><td>Sa</td>
				</tr>
				{this.scriptWeeks(days, hdlDayClicked)}
    	</table>
    );
  }
  scriptWeeks(weeks, fDayClicked){
  	return weeks.map(week=>{
  		return (
  			<tr>
  				{this.scriptWeek(week, fDayClicked)}
  			</tr>
  		);
  	}, this);
  }  
  scriptWeek(week, fDayClicked){
  	return week.map(day=>{
  		return (
  			<td> <Day day={day} onClick={fDayClicked} /> </td>
  		);
  	}, this);
  }
}

class Day extends Component{	
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
  	const day = this.props.day;
  	let f = this.props.onClick;
  	if (typeof f === 'function') f=f.bind(this); 
    return(
    	<div onClick={f}>
    		{day}
    	</div>
    );
  }
}


class DateInput extends Component{	
  constructor(props) {
    super(props);
    this.state = {
    	date: props.date,
    	edit: false
    }; 
  }
  render(){
  	const date = this.props.date;
  	const monthNames = ["January", "February", "March", "April", "May", "June",
  											"July", "August", "September", "October", "November", "December"];
  	const monthName = monthNames[date.getMonth()];
  	const uiDate = <div>{date.getDate()}<br/>{monthName}<br/>{date.getFullYear()}</div>;
  	const uiInput = <input type="date" value={this.state.date}/>;

    return(
    	<table style={{width: "100%", border: "1px solid red"}}>
    		<tr><td></td><td rowspan="3"></td><td></td></tr>
    		<tr><td>{'\u003C'}</td><td>{'\u003E'}</td></tr>
    		<tr><td></td><td></td></tr>
    	</table>
    );
  }
  
}

export default Calendar;
import React, { Component} from "react";
import {TextBlock} from "./InfoBlock.js";



function Testor(props) {
	
  return (
  	<div>  	
    	
    	<Controller />
    </div>
  );  
  
}

class Controller extends React.Component{
  constructor(props) {
    super(props);
    const v = "this is a editable small world."; 
    this.state = {
      text: v,
      newText: v
    }; 
  }    
  render(){   	
		const textChanged = this.textChanged.bind(this);
		const saveClicked = this.saveClicked.bind(this);
		const resetClicked = this.resetClicked.bind(this);	
		return (
			<div>
				<TextBlock txt={this.state.text}/>
				<TextBlock mode="edit" txt={this.state.text} newTxt={this.state.newText} hdlChange={textChanged} hdlSave={saveClicked} hdlReset={resetClicked}/>					
			</div>);
	}	
	textChanged(e){
		this.setState({newText:e.target.value});
	}
	saveClicked(){
		this.setState({text:this.state.newText});
	}
	resetClicked(){
		this.setState({newText:this.state.text});
	}
}

export default Testor;
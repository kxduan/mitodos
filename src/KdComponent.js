import React, { Component} from "react";

class KdComponent extends Component{	
  constructor(props) {
    super(props);
    let func = props.kdCompMount;
  	if(func && typeof func === 'function') {
  		func(this);     
  	}    
  	this.kdCompCallbackEnabled = false;
  	func = props.kdCompCallback;
  	if(func && typeof func === 'function') {
  		this.kdCompCallbackEnabled = true; 
  		this.kdCompCallback = func;     
  	}
  } 
}

export default KdComponent;
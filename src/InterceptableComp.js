import React, { Component} from "react";

class InterceptableComp extends Component{	
  constructor(props) {
    super(props);
    this.hookup();   
  } 
  hookup(){
  	this.interception = {enabled: false};
  	let func = this.props.interceptor;
  	if(func && typeof func === 'function') this.interception = {enabled: true, interceptor: func};
  }
}

export default InterceptableComp;
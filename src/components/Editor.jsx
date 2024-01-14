import React, { Component } from "react";
import './Editor.css'

class editor extends Component {

  constructor(props) {
    super(props);
    // to bind the method with event handler without (). 
    this.handleChange = this.handleChange.bind(this);

    this.state =
     { 
        value: ''
    };
}

  handleChange(e){
    this.setState({value: e.target.value});
  }

  
  render() {
    // inside the render method
   return(
    <div className="container">
    <div className="input">
        <h3>Input</h3>
        <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>
    </div>
    <div className="output">
        <h3>Pro Note</h3>
        <div className="output-text">{this.state.value}</div>
    </div>                
</div>
   )
  }
}

export default editor

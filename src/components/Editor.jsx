import React, { Component } from "react";
import "./Editor.css";

class editor extends Component {
  constructor(props) {
    super(props);
    // to bind the method with event handler without ().
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: "",
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  resetTextArea = () => {
    this.setState({ value: "" });
    document.getElementsByClassName("input-text")[0].value = "";
  }
  

  render() {
    // inside the render method
    return (
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <div className="piccon">
            <img src="src/assets/undo.png" onClick={this.resetTextArea} className="pic" height={40} alt="undo.png" border="0" />
            <textarea
              className="input-text"
              onChange={this.handleChange}
              defaultValue={this.state.value}
            />
          </div>
        </div>
        <div className="output">
          <h3>Pro Note</h3>
          <div className="output-text">{this.state.value}</div>
        </div>
      </div>
    );
  }
}

export default editor;

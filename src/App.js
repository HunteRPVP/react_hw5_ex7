import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "off",
      label: "Press",
    };
    this.press = this.press.bind(this);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate()");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }

  componentWillUnmount() {}

  press() {
    var className = this.state.class === "off" ? "on" : "off";
    this.setState({ class: className });
  }

  render() {
    console.log("render()");
    return (
      <div className="App">
        <button onClick={this.press} className={this.state.class}>
          {this.state.label}
        </button>
      </div>
    );
  }
}

export default App;

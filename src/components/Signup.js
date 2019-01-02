import React, { Component } from "react";
import scriptLoader from "react-async-script";

export class Signup extends React.Component {
  componentDidUpdate(prevProps) {
    // convertkit has loaded via async script
    if (!prevProps.signup && this.props.signup) {
      this.props.signup.render(this._container)
    }
  }
  render() { return (
    <div data-uid="c9cdd48911" ref={(r) => this._container = r} />
  )}
}

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this._internalRef = React.createRef();
  }
  componentDidMount() {
    console.log("ComponentNeedsScript's Instance -", this._internalRef.current);
  }
  render() { return (<AsyncHoc ref={this._internalRef} />)}
}

export default scriptLoader("https://f.convertkit.com/c9cdd48911/c7daeee6d4.js", {
  callbackName: "onloadcallback",
  globalName: "signup" 
})(Signup);

import React, { Component } from "react";
import "../css/navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="navbar-home">
        <span className="brand">{this.props.name}</span>
        <a className="btn-signup" href="index.html">
          Signup
        </a>
      </div>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import "../css/navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul className="topnav">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li className="right">
                <a href="#" className="active">
                  Cart
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;

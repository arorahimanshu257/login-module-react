import React, { Component } from "react";
import "../css/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { username: "", password: "" };
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.onLogin(this.state.username, this.state.password);
    // console.log(this.state.username, this.state.password);
  }

  handleUsername(event) {
    this.setState({ username: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div className="login-component">
        <form onSubmit={this.handleLogin.bind(this)}>
          <label htmlFor="user-name">
            <b>Username</b>
          </label>
          <input
            type="text"
            className="user-name"
            value={this.state.username}
            onChange={this.handleUsername.bind(this)}
          />
          <label htmlFor="user-password">
            <b>Password</b>
          </label>
          <input
            type="password"
            value={this.state.password}
            className="user-password"
            onChange={this.handlePassword.bind(this)}
          />
          <button type="submit" className="btn-login-user">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

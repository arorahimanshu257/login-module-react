import React from "react";
import Navbar from "../src/components/navbar";
import Login from "../src/components/login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { welcome: "Login to continue !", username: "", password: "" };
  }

  handleLogin(username, password) {
    this.setState({ username: username, password: password });
    this.setState({ welcome: `Welcome ${username} !` });
  }
  render() {
    return (
      <div>
        <Navbar name={this.state.welcome} />
        <Login onLogin={this.handleLogin.bind(this)} />
      </div>
    );
  }
}

export default App;

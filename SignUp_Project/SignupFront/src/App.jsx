import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class App extends Component {
  state = {
    fullName: "",
    userid: "",
    email: "",
    password: "",
  };

  changeFullName = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  };

  changeUserid = (event) => {
    this.setState({
      userid: event.target.value,
    });
  };

  changeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  changePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { fullName, userid, password, email } = this.state;
    const registered = {
      fullName,
      userid,
      password,
      email,
    };
    event.preventDefault();
    axios
      .post("http://localhost:4000/send", registered)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      this.setState({
          fullName: '',
          userid: '',
          email: '',
          password: ''
      })
  };

  render() {
    const { fullName, userid, password, email } = this.state;
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={this.changeFullName}
            />
            <br />
            <input
              type="text"
              placeholder="userid"
              value={userid}
              onChange={this.changeUserid}
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={this.changeEmail}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.changePassword}
            />
            <br />
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;

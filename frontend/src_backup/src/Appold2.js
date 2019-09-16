import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";
import Route from "react-router-dom/Route";
import LoginScreen from "./components/loginscreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], isLoaded: false, isLoggedIn: false };
  }

  /*
  componentDidMount() {
    fetch("http://127.0.0.1:5000/atm/65275")
      .then(res => res.json())
      .then(json => {
        this.setState({ isLoaded: true, items: json });
        console.log(json);
        console.log(typeof json);
        console.log(typeof this.items);
        console.log(this.items);
      });
  }
*/

  handleSubmit = e => {
    if (e) e.preventDefault();
    const number = this.input.value;
    console.log("Inputted value was", number);
    fetch("http://127.0.0.1:5000/atm/" + number)
      .then(res => res.json())
      .then(json => {
        this.setState({ isLoaded: true, items: json });
        json === "Account not found"
          ? this.setState({ isLoggedIn: false })
          : this.setState({ isLoggedIn: true });
        console.log(json);
        console.log(typeof json);
        console.log(typeof this.items);
        console.log(this.state);
      });
  };

  onSubmit() {
    fetch("http://127.0.0.1:5000/atm/65275")
      .then(res => res.json())
      .then(json => {
        this.setState({ isLoaded: true, items: json });
        console.log(json);
        console.log(typeof json);
        console.log(typeof this.items);
        console.log(this.items);
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    /*
    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div className="App">
          Number: {items.accountnumber} | Balance: {items.balance}
        </div>
      );
    }
  }
  */

    return (
      <div className="container">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
          <h1 className="login-title">Welcome to the GoDaddy ATM. $</h1>
          <br />
          <br />
          <br />
          <div className="form-group">
            <label>Enter your account number to get started.</label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <form onSubmit={this.handleSubmit}>
                <span>
                  <input
                    type="number"
                    className="form-control m-3"
                    id="accountNumberInput"
                    placeholder="Account Number"
                    ref={element => {
                      this.input = element;
                    }}
                    required
                    autoFocus
                  />
                  {items === "Account not found" ? (
                    <h1>Bad Number</h1>
                  ) : (
                    <h1></h1>
                  )}
                  <button className="btn btn-primary m-3">Login</button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

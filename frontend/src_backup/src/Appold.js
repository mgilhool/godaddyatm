import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], isLoaded: false };
  }

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

  render() {
    var { isLoaded, items } = this.state;

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
  /*
    return (
      <div className="container">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
          <h1 className="login-title">Welcome to the GoDaddy ATM. $</h1>
          <br />
          <br />
          <br />
          <div className="form-group">
            <label for="AccountControlInput1">
              Enter your account number to get started.
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <input
                type="number"
                className="form-control m-3"
                id="exampleFormControlInput1"
                placeholder="Account Number"
                required
                autofocus
              />
              <button className="btn btn-primary m-3">Login</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  */
}
export default App;

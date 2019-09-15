import React, { Component } from "react";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { accountInfo: [], isLoaded: false, isLoggedIn: false };
  }

  /*
    componentDidMount() {
      fetch("http://127.0.0.1:5000/atm/65275")
        .then(res => res.json())
        .then(json => {
          this.setState({ isLoaded: true, accountInfo: json });
          console.log(json);
          console.log(typeof json);
          console.log(typeof this.accountInfo);
          console.log(this.accountInfo);
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
        this.setState({ isLoaded: true, accountInfo: json });
        json === "Account not found"
          ? this.setState({ isLoggedIn: false })
          : this.props.onLogon({ json }); //On a "good" Login, this will make an event that is caught by App.js and updates the state of the main App
        console.log(json);
        console.log(typeof json);
        console.log(typeof this.accountInfo);
        console.log("State", this.state);
        console.log("Props", this.props);
      });
  };
  /*Not using the method below, just for testing
  onSubmit() {
    fetch("http://127.0.0.1:5000/atm/65275")
      .then(res => res.json())
      .then(json => {
        this.setState({ isLoaded: true, accountInfo: json });
        console.log(json);
        console.log(typeof json);
        console.log(typeof this.accountInfo);
        console.log(this.accountInfo);
      });
  }
*/
  render() {
    //const { accountInfo, isLoaded, onLogon } = this.props;
    console.log("Top of render - props:", this.props);
    //var { isLoaded, accountInfo } = this.state;
    /*
      if (!isLoaded) {
        return <div>Loading....</div>;
      } else {
        return (
          <div className="App">
            Number: {accountInfo.accountnumber} | Balance: {items.balance}
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
                  {this.state.accountInfo === "Account not found" ? (
                    <h1>Unknown User</h1>
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
export default LoginScreen;

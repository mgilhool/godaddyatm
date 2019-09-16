import React, { Component } from "react";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { accountInfo: [], isLoaded: false, isLoggedIn: false };
  }

  /*NOTES:
Handles "authentication".  User will type and account number into the box.  Then the App will check with the backend to see if the account exists
if it does, the state isLoggedIn will be updated to true, which will allow the mainscreen to be displayed.  IF the account number does not exist,
it will let the user know and then can try again
*/

  handleSubmit = e => {
    /*When the submit button is pressed the app send the account number to the backend and the response will be "Account not found" or a
    json object with account number and balance*/

    if (e) e.preventDefault();
    const number = this.input.value;
    //console.log("Inputted value was", number);
    fetch("http://127.0.0.1:5000/atm/" + number)
      .then(res => res.json())
      .then(json => {
        this.setState({ isLoaded: true, accountInfo: json });
        json === "Account not found"
          ? this.setState({ isLoggedIn: false })
          : this.props.onLogon({ json }); //On a "good" Login, this will make an event that is caught by App.js and updates the state of the main App
        //console.log(json);
        //console.log(typeof json);
        //console.log(typeof this.accountInfo);
        //console.log("State", this.state);
        //console.log("Props", this.props);
      });
  };

  render() {
    //console.log("Top of render - props:", this.props);

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
                    className={
                      this.state.accountInfo === "Account not found"
                        ? "form-control is-invalid m-3"
                        : "form-control m-3"
                    }
                    id="accountNumberInput"
                    placeholder="Account Number"
                    ref={element => {
                      this.input = element;
                    }}
                    required
                    autoFocus
                  />
                  {this.state.accountInfo === "Account not found" ? (
                    <span style={{ color: "red" }}>
                      <h3>Unknown User</h3>
                    </span>
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

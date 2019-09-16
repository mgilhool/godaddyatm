import React, { Component } from "react";
/*  Don't need at present
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";*/
import Route from "react-router-dom/Route";
import NavBar from "./navbar";
// Ran out of time, hardcoded these options into  this class to preserve state, would like to fix later
// import MainMenu from "./mainmenu";
// import BalanceMenu from "./balancemenu";

/*NOTES
This is the main menuscreen of the App.  It passed in the accountInfo (json.accountnumber and json.balance)
and saves it locally in state.  It also creates a variable call menuState which is used for navigation:
 (menuState = "Welcome" -> show the Welcome screen;  menuState = "Balance" -> show the Balance Screen)
 it works, but I am sure there is a better way than hardcoding it.
 It calls the NavBar and passes in the account info so it can populate correctly, and then displays the menu based on menuState
 */

class MainScreen extends Component {
  constructor(props) {
    super(props);
    const currentAccount = this.props.acccountInfo;
    this.state = { accountInfo: currentAccount, menuState: "Welcome" };
    console.log("MainScreen - constructor", this.state);
  }

  handleLogout() {
    {
      this.props.onLogout();
    }
  }

  render() {
    console.log("Main Menu render:", this.state);
    return (
      <React.Fragment>
        <NavBar
          accountInfo={this.state.accountInfo}
          onLogout={this.handleLogout.bind(this)}
        />
        <Route
          path="/"
          exact
          strict
          render={() =>
            this.state.menuState === "Welcome" ? (
              <React.Fragment>
                <h2>
                  Welcome Account {this.state.accountInfo.json.accountnumber}
                </h2>
                <button
                  className="btn btn-primary m-3"
                  onClick={() => this.setState({ menuState: "Balance" })}
                >
                  Check Balance
                </button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h1>Account Balance</h1>
                Acct# {this.state.accountInfo.json.accountnumber}{" "}
                <span
                  style={{
                    color:
                      this.state.accountInfo.json.balance >= 0 ? "green" : "red"
                  }}
                >
                  {this.state.accountInfo.json.balance >= 0
                    ? "$" + this.state.accountInfo.json.balance
                    : "-$" + this.state.accountInfo.json.balance * -1}
                </span>
                <button
                  className="btn btn-primary m-3"
                  onClick={() => this.setState({ menuState: "Welcome" })}
                >
                  Go Back
                </button>
              </React.Fragment>
            )
          }
        />
      </React.Fragment>
    );
  }
}
export default MainScreen;

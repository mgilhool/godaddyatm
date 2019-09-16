import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router
  /*Link,
  NavLink,
  Redirect,
  Prompt    don't need right now*/
} from "react-router-dom";
import Route from "react-router-dom/Route";
import LoginScreen from "./components/loginscreen";
import MainScreen from "./components/mainscreen";

/* NOTES
This is a very basic ATM program.   Starting with his class there is a state object that holds an account info object (containing account number and balance) and a isLoggedIn state
to detirmine if a user is logged in or not.   
When the app starts isLogged in is false so it heads to the loginScreen, once a user it logged in, it will call the MainScreen and pass the accountinfo so the user can do check their balance
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { accountInfo: [], isLoaded: false, isLoggedIn: false }; //switch true or false here.
  }

  handleLogon = accountInfo => {
    const loggedAccountInfo = accountInfo;
    //console.log("Handling Logon:", loggedAccountInfo);
    this.setState({
      accountInfo: loggedAccountInfo,
      isLoaded: true,
      isLoggedIn: true
    });
    //console.log("State at Logon:", this.state);
  };

  handleLogout = () => {
    this.setState({
      accountInfo: undefined,
      isLoaded: false,
      isLoggedIn: false
    });
    return this.props.history.push("/");
  };

  render() {
    // var { isLoaded, items } = this.state;

    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            exact
            strict
            render={() =>
              this.state.isLoggedIn === true ? (
                <MainScreen
                  acccountInfo={this.state.accountInfo}
                  onLogout={this.handleLogout}
                />
              ) : (
                <LoginScreen
                  acccountInfo={this.state.accountInfo}
                  isLoaded={this.state.isLoaded}
                  onLogon={this.handleLogon}
                />
              )
            }
          />
        </div>
      </Router>
    );
  }
}
export default App;

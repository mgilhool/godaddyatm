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
import MainScreen from "./components/mainscreen";
import { createBrowserHistory } from "history";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { accountInfo: [], isLoaded: false, isLoggedIn: false }; //switch true or false here.
  }

  handleLogon = accountInfo => {
    const loggedAccountInfo = accountInfo;
    console.log("Handling Logon:", loggedAccountInfo);
    this.setState({
      accountInfo: loggedAccountInfo,
      isLoaded: true,
      isLoggedIn: true
    });
    console.log("State at Logon:", this.state);
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

/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], isLoaded: false, isLoggedIn: false };
  }

  render() {
    // var { isLoaded, items } = this.state;

    return (
      <Router>
        <div className="App">
          <Route path="/" exact strict component={LoginScreen} />;
        </div>
      </Router>
    );
  }
}
export default App;
*/

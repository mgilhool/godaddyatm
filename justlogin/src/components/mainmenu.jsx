import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";
import Route from "react-router-dom/Route";
import NavBar from "./navbar";
import BalanceMenu from "./balancemenu";

class MainMenu extends Component {
  constructor(props) {
    super(props);
    const currentAccount = this.props.acccountInfo;
    this.state = { accountInfo: currentAccount };
    console.log("MainMenu - constructor", this.state);
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

  handleLogout() {
    {
      this.props.onLogout();
    }
  }

  render() {
    //var { isLoaded, items } = this.state;
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

    console.log("Main Menu render:", this.state);
    return (
      <React.Fragment>
        <NavBar
          accountInfo={this.state.accountInfo}
          onLogout={this.handleLogout.bind(this)}
        />
        <Router>
          <Route
            path="/balance"
            exact
            strict
            render={() => <BalanceMenu acccountInfo={this.state.accountInfo} />}
          />
        </Router>
      </React.Fragment>
      //<button onClick={() => this.props.onLogout()}>Logout</button>   another logout for testing
    );
  }
}
export default MainMenu;

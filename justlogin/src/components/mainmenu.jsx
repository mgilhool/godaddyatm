import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";
import Route from "react-router-dom/Route";

class MainMenu extends Component {
  constructor(props) {
    super(props);
    const currentAccount = this.props.acccountInfo;
    this.state = { accountInfo: currentAccount };
    console.log("MainMenu - constructor", this.state);
  }

  render() {
    return (
      <React.Fragment>
        <h2>Welcome Account {this.state.accountInfo.json.accountnumber}</h2>
        <Link to={`/balance/${this.props}`}>
          <button>Check Balance</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default MainMenu;

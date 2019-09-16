import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";

class BalanceMenu extends Component {
  constructor(props) {
    super(props);
    const currentAccount = this.props.acccountInfo;
    this.state = { accountInfo: currentAccount };
    console.log("balanceMenu - constructor", this.state);
  }

  render() {
    return (
      <div>
        <h1>Account Balance</h1>
        Acct# {this.state.accountInfo.json.accountnumber}{" "}
        <span
          style={{
            color: this.state.accountInfo.json.balance >= 0 ? "green" : "red"
          }}
        >
          {this.state.accountInfo.json.balance >= 0
            ? "$" + this.state.accountInfo.json.balance
            : "-$" + this.state.accountInfo.json.balance * -1}
        </span>
        <Link to="/">Go Back</Link>
      </div>
    );
  }
}

export default BalanceMenu;

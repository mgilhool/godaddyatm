/*
import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    //const currentAccount = this.props.acccountInfo;
    //this.state = { accountInfo: currentAccount };
    console.log("NavBar - constructor", this.props);
  }
  render() {
    console.log("NavBar - Rendered", this.props);
    return <span>{this.props.accountInfo.json.accountnumber}</span>;
    // <button onClick={() => this.props.onLogout()}>Logout</button>
  }
}

export default NavBar;
*/
import React, { Component } from "react";

//Stateless Functional Component
const NavBar = ({ accountInfo, onLogout }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar-right mr-auto">
      <span className="">{accountInfo.json.accountnumber}</span>
      <a href="/" onClick={onLogout}>
        Logout
      </a>
    </nav>
  );
};

export default NavBar;

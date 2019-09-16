import React, { Component } from "react";
import NavBar from "./navbar";

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
        <h1>Logged In! {this.state.accountInfo.json.accountnumber}</h1>
        <h2>Your Balance is: {this.state.accountInfo.json.balance}</h2>
      </React.Fragment>
      //<button onClick={() => this.props.onLogout()}>Logout</button>   another logout for testing
    );
  }
}
export default MainMenu;

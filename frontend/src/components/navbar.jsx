/*
This is the navBar for the top of screen.  It should show the account number and provide a logout link
it has no internal state so the accountInfo object is passed in to give it the ability to show it. 
On click of log out and event is passed up to mainScreen, and then App to clear the accountInfo and logged in state
then the path is set back to "/" to go back to the login screen
*/
import React, { Component } from "react";

const NavBar = ({ accountInfo, onLogout }) => {
  //console.log("NavBar - Rendered");
  return (
    <nav className="navbar-right">
      <span className="m-2">{accountInfo.json.accountnumber}</span>
      <a href="/" onClick={onLogout}>
        Logout
      </a>
    </nav>
  );
};

export default NavBar;

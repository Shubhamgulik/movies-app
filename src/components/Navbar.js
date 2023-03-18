import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="search-container">
          <input type="text" placeholder="Search Movie" />
          <button id="search-btn">Search</button>
        </div>
      </div>
    );
  }
}

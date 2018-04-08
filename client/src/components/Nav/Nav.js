import React from "react";

const Nav = () => (
  <div>
    <nav className="navbar navbar-default navbar-top">
      <div className="container-fluid">
        <p className="navbar-brand">React Times</p>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/search">Search</a></li>
          <li><a href="/saved">Saved Articles</a></li>
        </ul>
      </div>
    </nav>
    <div className="jumbotron text-center">
      <h1>The Times, brought to you by React.js</h1>
      <h2>Search for and save articles of interest.</h2>
    </div>
  </div>
)

export default Nav
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";



const App = () => {
  return (
  <div className="container">
    <Nav />
    <Router>
      <Switch> 
        <Route exact path="/" component={Search} /> 
        <Route exact path="/search" component={Search} />
        <Route path="/" component={Search} />
      </Switch>
  </Router>
  </div>
  )
};

export default App;


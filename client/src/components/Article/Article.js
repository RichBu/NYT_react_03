import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "../../utils/API.js";
import SaveButton from "./SaveButton.js"
import DelButton from "./DelButton.js"

const Article = (props) => {
  const articleProps = props;
  return (
    <div className="well well-lg">
      <h4>{props.title}</h4>
      <p>{props.date}</p>
      <a href={props.url} target="_blank"><button className="btn btn-default pull-right">View Article</button></a>
      <Router>
        <Switch>
          <Route exact path="/search" render={() => {
            return <SaveButton {...articleProps}/>} 
          }
          />
          <Route exact path="/saved" render={() => {
            return <DelButton id={articleProps.id} getSaved={articleProps.getSaved}/>}
          }
          />
          <Route path="/" render={()=> {
            return <SaveButton {... articleProps}/>} 
          }
          />
        </Switch>
      </Router>
    </div>
  )
}
export default Article;


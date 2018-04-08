import React from "react";
import API from "../../utils/API.js";

const SaveButton = (props) => (
  <button className="btn btn-primary pull-right" onClick={() => {
    console.log(props);
    API.saveArticle(props);
  }}>Save</button>
)

export default SaveButton
import React, { Component } from "react";
import Form from "../../components/Form";
import API from "../../utils/API";
import Article from "../../components/Article";

export default class Search extends Component {

  state = {
    articles: []
  }

  updateStateArticles = (props) => {
    const query= {
      topic: props.topic,
      start: props.start.replace(/-/g,""),
      end: props.end.replace(/-/g, "")
    }

    API.getArticles(query).then((response) =>{
      this.setState({
        articles:response.data.response.docs
      })

    })
  }

 render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Search for Articles</h3>
          </div>
          <div className="panel-body">
            <Form updateStateArticles={this.updateStateArticles} />
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Results</h3>
          </div>
          <div className="panel-body">
            {this.state.articles.map((article, index) => {
              return (
                <Article
                  key={index}
                  title={article.headline.main}
                  date={article.pub_date.slice(0, 10)}
                  url={article.web_url}
                />
              )
            })}
          </div>
        </div>

      </div>
    )
  }
}


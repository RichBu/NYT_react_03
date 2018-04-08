import React, { Component } from "react";
import Article from "../../components/Article";
import API from "../../utils/API.js";

class Saved extends Component {
  state = {
    articles: []
  }
  componentWillMount() {
    API.getSaved().then((savedArticles) => {
      this.setState({
        articles: savedArticles.data
      })
    })
  }

  getSaved = () => {
    API.getSaved().then((savedArticles) => {
      this.setState({
        articles: savedArticles.data
      })
    })
  }



  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Saved Articles</h3>
        </div>
        <div className="panel-body">
          {this.state.articles.map((article) => {
            return (
              <Article
                key={article._id}
                title={article.title}
                date={article.created_at}
                url={article.link}
                id={article._id}
                getSaved={this.getSaved}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Saved;
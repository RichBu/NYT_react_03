import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&sort-newest";
//const APIKEY = "&apikey=51e97822ecd646c0b8a6b7f0999fd3e6";
const APIKEY = "&apikey=c3cde688433943d2833192aeb0574e2a";
//const APIKEY = "&apikey=f46b65166bf646ec99d0e27975102b42";

export default {
  getArticles: (query) => {
    const topic =`&q=${query.topic}`;
    const start = `&begin_date=${query.start}`;
    let end = "";
    //need to check if this is the last one
    if ( query.end === undefined || query.end === null || query.end.trim()==="") {
      //no end date put in, so don't put the end date into the query
      end = "";
    } else {
      end = `&end_date=${query.end}`;
    };
    console.log(`${BASEURL}${topic}${start}${end}${APIKEY}`); 
    return axios.get(`${BASEURL}${topic}${start}${end}${APIKEY}`);
  },

  saveArticle: (articleData) => {
    return axios.post("/api/articles", articleData);
  },

  deleteArticle: (id) => {
    return axios.delete(`/api/articles/${id}`);
  },
  
  getSaved: () => {
    return axios.get("/api/articles");
  }
}
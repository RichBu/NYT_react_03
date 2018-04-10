import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&sort-newest";
const APIKEY = "&apikey=c3cde688433943d2833192aeb0574e2a";
//const APIKEY = "&apikey=f46b65166bf646ec99d0e27975102b42";

export default {
  getArticles: (query) => {
    const topic =`&q=${query.topic}`;
    const start = `&begin_date=${query.start}`;
    const end = `&end_date=${query.end}`
    console.log(`${BASEURL}${topic}${start}${end}${APIKEY}`); 
    return axios.get(`${BASEURL}${topic}${start}${end}${APIKEY}`);
  },

  saveArticle: (articleData) => {
    debugger;
    return axios.post("/api/articles", articleData);
  },

  deleteArticle: (id) => {
    return axios.delete(`/api/articles/${id}`);
  },
  
  getSaved: () => {
    return axios.get("/api/articles");
  }
}
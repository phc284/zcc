import React, { Component } from 'react';
import axios from 'axios'

// b4649e2eeda04898bf97687ff94929ef

var today = new Date();
var dd = "0" + today.getDate();
var mm = today.getMonth()+1 + "";
var yyyy = today.getFullYear() + "";

if (mm.length === 1) {
  mm = "0" + mm;
}
if (dd.length === 3) {
  dd = dd.slice(1, 3)
}
console.log(dd, mm, yyyy)

var url = 'https://newsapi.org/v2/everything?' +
          'q=dallas%20cowboys&' +
          `from=${yyyy}-${mm}-${dd}&` +
          'sortBy=relavancy&' +
          'apiKey=b4649e2eeda04898bf97687ff94929ef';

class Sidebar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get(url)
      .then((res) =>{
        console.log(res)
        this.setState({
          articles: res.data.articles
        })
      })
  }

  renderArticles() {
    let articles = this.state.articles;
    return (
      this.state.articles.map((article, index) => {
        if (article) {
          return (<div>
              <a href={article.url}>{article.title}</a>
            </div>)
        }
      })
    )
  }


  render() {
  return (
      <div className="sidebar">
        <div className="sidebar-layout">
          <h2>Recent News</h2>
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default Sidebar;

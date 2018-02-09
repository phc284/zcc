import React, { Component } from 'react';
import axios from 'axios'

// b4649e2eeda04898bf97687ff94929ef

class News extends Component {
  constructor (props) {
    super(props);

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles() {
    axios.get('/news')
      .then ((res) => {
        console.log(res);
        let articles = res.data.slice(0, 11);
        this.setState({
          articles
        })
      })

    // var today = new Date();
    // var dd = "0" + today.getDate();
    // var mm = today.getMonth()+1 + "";
    // var yyyy = today.getFullYear() + "";
    //
    // if (mm.length === 1) {
    //   mm = "0" + mm;
    // }
    // if (dd.length === 3) {
    //   dd = dd.slice(1, 3)
    // }
    //
    // var url = 'https://newsapi.org/v2/everything?' +
    //           'q=dallas%20cowboys&' +
    //           `from=${yyyy}-${mm}-${dd}&` +
    //           'sortBy=relevancy&' +
    //           'apiKey=b4649e2eeda04898bf97687ff94929ef';
    //
    // axios.get(url)
    //   .then((res) =>{
    //     let articles = res.data.articles.slice(0, 11);
    //     this.setState({
    //       articles
    //     })
    //   })
  }

  renderArticles() {
    return (
      this.state.articles.map((article, index) => {
          return (<div className="news-item" key={index}>
              <a target="_blank" rel="noopener noreferrer" href={article.url}>{article.title}</a>
            </div>)
      })
    )
  }


  render() {
  return (
      <div className="news">
        <div className="news-layout">
        <h2>Recent News<br/><span>Powered by NewsAPI</span></h2>
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default News;

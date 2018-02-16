import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions'

import Article from '../components/Article'

class NewsList extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  renderArticles() {
    return (
      this.props.news.map((article, index) => {
          return (<Article article={article} key={index}/>)
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

function mapStateToProps({ news }) {
  return news
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);

import React from 'react';

const Article = ({article, index}) => {
    return (
      <div className="news-item">
        <a target="_blank" rel="noopener noreferrer" href={article.url}>{article.title}</a>
      </div>
    );
}

export default Article;

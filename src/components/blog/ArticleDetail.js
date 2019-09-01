import React from 'react';
import PropTypes from 'prop-types';

function ArticleDetail({ article }) {
  if (!article) {
    return null;
  }
  return (
    <div>
      <h4>{article.title}</h4>
      <div>{article.body}</div>
    </div>
  );
}

ArticleDetail.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleDetail;

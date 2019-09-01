import React from 'react';
import PropTypes from 'prop-types';

function ArticleList({ articles, setModalData, setIsModalOpened }) {
  return (
    <ul>
      {articles.map(article => {
        const { id, title } = article;
        return (
          <li key={`article--${id}`}>
            {title}
            <button
              onClick={() => {
                setModalData(article);
                setIsModalOpened(true);
              }}
            >
              View
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.array,
  setModalData: PropTypes.func.isRequired,
  setIsModalOpened: PropTypes.func.isRequired
};

export default ArticleList;

import React from 'react';
import PropTypes from 'prop-types';
import { useModalWithData } from '../../hooks/useModal';
import CustomModal from '../CustomModal';
import ArticleDetail from './ArticleDetail';
import ArticleList from './ArticleList';

const Blog = ({ articles }) => {
  const [
    setIsModalOpened,
    isModalOpened,
    modalData,
    setModalData
   ] = useModalWithData();

  return (
    <div>
      <div style={{ padding: '1rem' }} />
      <CustomModal
        title="useModalWithData"
        isActive={isModalOpened}
        handleClose={() => setIsModalOpened(false)}
      >
        <ArticleDetail article={modalData} />
      </CustomModal>

      <ArticleList
        articles={articles}
        setModalData={setModalData}
        setIsModalOpened={setIsModalOpened}
      />
    </div>
  );
};

Blog.propTypes = {
  articles: PropTypes.object.isRequired
};
export default Blog;

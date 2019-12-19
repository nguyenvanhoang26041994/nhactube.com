import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Carousel } from '../../components/core';
import { useList } from './hooks';

const MassiveHeaderCarousel = (props) => {
  const { list, actions } = useList();
  const history = useHistory();

  useEffect(() => {
    actions.fetchData();
  }, []);

  const handleClick = useCallback((index, item) => {
    history.push(`${item.link}`);
  }, [history]);

  return (
    <Carousel
      list={list}
      onClick={handleClick}
      {...props}
    />
  );
};

MassiveHeaderCarousel.displayName = 'MassiveHeaderCarousel';
MassiveHeaderCarousel.propTypes = {};
MassiveHeaderCarousel.defaultProps = {};

export default MassiveHeaderCarousel;

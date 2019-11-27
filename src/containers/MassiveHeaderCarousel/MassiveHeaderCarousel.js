import React, { useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';
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

export default MassiveHeaderCarousel;

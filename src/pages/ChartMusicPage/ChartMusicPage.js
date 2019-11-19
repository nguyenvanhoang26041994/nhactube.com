import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

import ChartMusic from '../../containers/ChartMusic';

const Wrapper = styled.div``;

const ChartMusicPage = ({}) => {
  return (
    <Wrapper className="container mx-auto">
      <ChartMusic />
    </Wrapper>
  );
};

export default ChartMusicPage;

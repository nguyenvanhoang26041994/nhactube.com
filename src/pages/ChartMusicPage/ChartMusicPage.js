import React from 'react';
import PropTypes from 'prop-types';
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

ChartMusicPage.displayName = 'ChartMusicPage';
ChartMusicPage.propTypes = {
  className: PropTypes.string,
};
ChartMusicPage.defaultProps = {};

export default ChartMusicPage;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SongDetail from './SongDetail';

const Wrapper = styled.div`
  position: relative;
`;

const SongDetailPage = ({ className }) => {
  return (
    <Wrapper className={className}>
      <SongDetail />
    </Wrapper>
  );
};

SongDetailPage.displayName = 'SongDetailPage';
SongDetailPage.propTypes = {
  className: PropTypes.string,
};
SongDetailPage.defaultProps = {};

export default SongDetailPage;

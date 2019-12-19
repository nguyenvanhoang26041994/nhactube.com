import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PlaylistDetail from './PlaylistDetail';

const Wrapper = styled.div`
  position: relative;
`;

const SongDetailPage = ({ className }) => {
  return (
    <Wrapper className={className}>
      <PlaylistDetail />
    </Wrapper>
  );
};

SongDetailPage.displayName = 'SongDetailPage';
SongDetailPage.propTypes = {
  className: PropTypes.string,
};
SongDetailPage.defaultProps = {};

export default SongDetailPage;

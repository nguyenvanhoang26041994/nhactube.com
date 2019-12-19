import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ArtistDetail from './ArtistDetail';

const Wrapper = styled.div`
  position: relative;
`;

const ArtistDetailPage = ({ className }) => {
  return (
    <Wrapper className={className}>
      <ArtistDetail />
    </Wrapper>
  );
};

ArtistDetailPage.displayName = 'ArtistDetailPage';
ArtistDetailPage.propTypes = {
  className: PropTypes.string,
};
ArtistDetailPage.defaultProps = {};

export default ArtistDetailPage;

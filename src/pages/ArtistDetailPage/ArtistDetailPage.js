import React, { useEffect } from 'react';
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

export default ArtistDetailPage;

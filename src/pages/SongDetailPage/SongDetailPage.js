import React, { useEffect } from 'react';
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

export default SongDetailPage;

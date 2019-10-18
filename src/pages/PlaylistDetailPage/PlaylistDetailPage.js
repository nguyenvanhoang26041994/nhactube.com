import React from 'react';
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

export default SongDetailPage;

import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import MiniPlayer from '../MiniPlayer.mobile';

const Wrapper = styled.div`
`;

const GlobalPlayer = ({}) => {
  return (
    <Wrapper>
      <MiniPlayer />
    </Wrapper>
  );
};

export default GlobalPlayer;

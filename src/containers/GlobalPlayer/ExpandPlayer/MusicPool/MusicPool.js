import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import CurrentMusics from './CurrentMusics';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 1;
  transition: all 0.25s;
  border-right: 1px solid rgba(255, 255, 255,.1);
  padding: 3rem 0;
  box-sizing: border-box;
`;

const MusicPool = ({ className, style }) => {
  return (
    <Wrapper className={className} style={style}>
      <CurrentMusics />
    </Wrapper>
  );
};

export default MusicPool;

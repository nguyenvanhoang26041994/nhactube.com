import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ExpandPlayer from './ExpandPlayer';
import GlobalAudio from '../../GlobalAudio';

const Wrapper = styled.div``;

const GlobalPlayer = ({}) => {
  const [expanded, setExpanded] = useState(true);
  const expandPlayerRef = useRef();

  return (
    <Wrapper>
      <GlobalAudio />
      <ExpandPlayer
        style={{
          height: '100vh',
          transform: expanded ? null : 'translateY(100vh)',
          opacity: expanded ? '1' : '0',
        }}
        expandPlayerRef={expandPlayerRef}
        isExpanded={expanded}
      />
    </Wrapper>
  );
}

export default GlobalPlayer;

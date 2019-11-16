import React from 'react';
import styled from 'styled-components';
import { Image } from '../components/core';

import { useGlobalPlayerSong } from '../hooks';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  .inner {
    position: relative;
  }
`;

const InnerWrapper = styled.div`
  position: relative;
`;

const BlurImage = styled(Image)`
  position: absolute;
  width: 100vw;
  height: 100vh;

  img {
    filter: blur(35px) brightness(0.5) grayscale(0.6);
    transform: scale(1.5);
  }
`;

export default (props) => {
  const { song } = useGlobalPlayerSong();

  return (
    <Wrapper>
      <InnerWrapper className="inner">
        <BlurImage className="inner__blur" src={song.avatarUrl || '/static/images/blur.jpg'} alt={song.name} {...props} />
      </InnerWrapper>
    </Wrapper>
  );
};

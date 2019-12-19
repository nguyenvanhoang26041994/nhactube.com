import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';

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
    filter: blur(60px) brightness(0.5);
    transform: scale(1.5);
  }
`;

const BlurBackground = ({ className, dark, ...otherProps }) => {
  const { song } = useGlobalPlayerSong();

  return (
    <Wrapper className={className}>
      <InnerWrapper className="inner">
        <BlurImage className="inner__blur" src={song.avatarUrl || '/static/images/blur.jpg'} alt={song.name} {...otherProps} />
      </InnerWrapper>
    </Wrapper>
  );
};

BlurBackground.displayName = 'BlurBackground';
BlurBackground.propTypes = {
  className: PropTypes.string,
  dark: PropTypes.bool,
};
BlurBackground.defaultProps = {};

export default BlurBackground;

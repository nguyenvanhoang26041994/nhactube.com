import React from 'react';
import styled from 'styled-components';
import { Image } from '../components/core';

const BlurImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  img {
    filter: blur(35px) brightness(0.5) grayscale(0.6);
    transform: scale(1.5);
  }
`;

export default ({ src, ...otherProps }) => {
  return <BlurImage src={src || '/static/images/default-bg.jpeg'} {...otherProps} />
};

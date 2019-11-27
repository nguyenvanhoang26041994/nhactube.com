import React from 'react';
import styled from 'styled-components';
import Image from '../Image';

const SliderMember = styled(Image)`
  width: 100%;
  position: absolute;
  cursor: pointer;

  img {
    filter: blur(10px) brightness(0.5);
    transform: scale(1.1);
  }
`;

export default SliderMember;

import React from 'react';
import styled from 'styled-components';
import Image from '../Image';

const SliderMember = styled(Image)`
  width: 100%;
  border-radius: 0.75em;
  position: absolute;
  cursor: pointer;

  img {
    filter: blur(5px);
    transform: scale(1.1);
  }
`;

export default SliderMember;

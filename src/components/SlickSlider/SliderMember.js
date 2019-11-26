import React from 'react';
import styled from 'styled-components';
import Image from '../Image';

const SliderMember = styled(Image)`
  width: 100%;
  position: absolute;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  /* border-radius: 0.5rem; */

  img {
    filter: blur(10px) brightness(0.5);
    transform: scale(1.1);
  }
`;

export default SliderMember;

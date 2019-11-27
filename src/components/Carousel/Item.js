import React from 'react';
import styled from 'styled-components';
import Image from '../Image';

const Item = styled(Image)`
  width: 100%;
  position: absolute;
  cursor: pointer;
  display: none;
  transition: 0.3s;

  img {
    transition: 0.5s;
  }

  &.--first,
  &.--second,
  &.--main,
  &.--fourth,
  &.--fiveth {
    display: flex;
  }

  &.--first,
  &.--second,
  &.--fourth,
  &.--fiveth {
    img {
      filter: grayscale(1);
    }
  }

  &.--first,
  &.--fiveth {
    z-index: 1;
    width: 80%;
    height: calc(100% - 6rem);
  }

  &.--first {
    left: 0;
  }

  &.--fiveth {
    right: 0;
  }

  &.--second,
  &.--fourth {
    z-index: 2;
    width: 60%;
    height: calc(100% - 3rem);
  }

  &.--second {
    left: 3em;
  }

  &.--fourth {
    right: 3em;
  }

  &.--main {
    z-index: 3;
    width: calc(100% - 12rem);
    height: 100%;
  }
`;

export default Item;

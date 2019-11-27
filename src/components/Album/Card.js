import styled from 'styled-components';
import Image from '../../components/Image';

const Card = styled(Image)`
  position: absolute;
  display: none;
  transition: 0.1s;

  img {
    transition: 0.1s;
  }

  &.--first,
  &.--second,
  &.--main {
    display: flex;
  }

  &.--first,
  &.--second {
    img {
      filter: blur(20px);
      transform: scale(1.5);
    }
  }

  &.--second {
    z-index: 3;
    left: 0;
    height: calc(100% - 8rem);
  }

  &.--first {
    z-index: 4;
    left: 1rem;
    height: calc(100% - 4rem);
  }

  &.--main {
    z-index: 10;
    left: 2rem;
    width: calc(100% - 2rem);
    height: 100%;
  }
`;

export default Card;

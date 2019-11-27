import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0.5em;
  width: 0.5em;
  height: 0.5em;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: 0.3s;
  
  &:hover,
  &.--active {
    transform: scale(1.5);
    background-color: rgba(255, 255, 255, 1);
  }
`;

const Dot = ({ className, onClick, active }) => {
  return (
    <Wrapper className={cn({ '--active': active }, className)} onClick={onClick} />
  );
}

export default Dot;

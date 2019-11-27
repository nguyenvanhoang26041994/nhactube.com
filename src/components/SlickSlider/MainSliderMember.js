import React, { useMemo } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import SliderMember from './SliderMember';
import Dot from './Dot';

const Wrapper = styled.div`
  z-index: 3;
  position: relative;
  width: calc(100% - 12rem);
  height: 100%;
  overflow: hidden;
  background-color: #fff;
`;

const StyledSliderMember = styled(SliderMember)`
  width: 100%;
  height: 100%;
  position: static;
  border-radius: 0;

  img {
    filter: none;
    border-radius: 0;
    transform: none;
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2em;
`;

const _times = (times) => {
  const array = [];
  for (let i = 0; i < times; i++) {
    array.push(i);
  }
  return array;
}

const MainSliderMember = ({ wrapperClassName, length, index, onDotClick, ...otherProps }) => {
  const dotNumber = useMemo(() => _times(length), [length]);
  return (
    <Wrapper className={cn('heavy-box-shadow', wrapperClassName)}>
      <StyledSliderMember {...otherProps} className={`fadeIn --animation-for-${index}`}/>
      <Dots>
        {dotNumber.map((number, idx) => (
          <Dot key={idx} active={idx === index} onClick={() => onDotClick(idx)} />
        ))}
      </Dots>
    </Wrapper>
  );
};

export default MainSliderMember;

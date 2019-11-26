import React, { useMemo } from 'react';
import styled from 'styled-components';
import SliderMember from './SliderMember';
import Dot from './Dot';

const Wrapper = styled.div`
  z-index: 3;
  position: relative;
  width: calc(100% - 12rem);
  height: 100%;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  overflow: hidden;
  background-color: #fff;
  /* border-radius: 0.5rem; */
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
    <Wrapper className={wrapperClassName}>
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

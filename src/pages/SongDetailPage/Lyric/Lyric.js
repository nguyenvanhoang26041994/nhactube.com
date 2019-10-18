import React, { useEffect, useRef, useCallback } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

const LyricTextStyled = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0 0.5rem;
  transition: all 0.2s;

  &.--is-active {
    color: ${props => props.theme.colors['yellow-500']};
  }
`;

const LyricText = ({ className, isActive, parentRef, children }) => {
  const ref = useRef();

  // const handleScrollToMiddle = useCallback(() => {
  //   parentRef.current.scrollTo({
  //     top: getPageY(ref.current) - getPageY(parentRef.current) - 200,
  //     behavior: 'smooth',
  //   });
  // }, [parentRef, ref]);

  // useEffect(() => {
  //   if (isActive) {
  //     handleScrollToMiddle();
  //   }
  // }, [isActive]);

  return (
    <LyricTextStyled className={cn({ '--is-active': isActive}, className)} ref={ref}>
      {children}
    </LyricTextStyled>
  );
}

const Wrapper = styled.div`
  font-size: 1.25rem;
  padding-top: 5rem;
`;

const LyricWrapper = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: overlay;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  height:100%;
  /* mask-image: -webkit-linear-gradient(top,hsla(0,0%,100%,0),hsla(0,0%,100%,.6) 15%,#fff 25%,#fff 75%,hsla(0,0%,100%,.6) 85%,hsla(0,0%,100%,0)); */

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; 
  }

  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, rgba(141, 141, 141, 0.35), rgba(141, 141, 141, 0.5), rgba(141, 141, 141, 0.35));
    border-radius: 999px;
  }
`;

const Lyric = ({ className, lyric }) => {
  const lyricWrapperRef = useRef();
  return (
    <Wrapper className={className}>
      <LyricWrapper>
        {lyric && lyric.map((l, idx) => (
          <li key={idx}>
            <LyricText parentRef={lyricWrapperRef}>{l.text}</LyricText>
          </li>
        ))}
      </LyricWrapper>
    </Wrapper>
  );
};

export default Lyric;

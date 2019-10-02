import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon } from '../../../components/core';
import { useGlobalPlayerMusic, useGlobalAudio } from '../../../hooks';
import { getPageY } from '../../../utils';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #ffffff;
  width: 100%;
  font-size: 1.125rem;
  line-height: 1.25em;
  word-spacing: 0.125em;
  overflow: hidden;
  transition: all 0.5s;
`;

const LyricsWrapper = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: overlay;
  overflow-x: hidden;
  overflow-y: auto;
  mask-image: -webkit-linear-gradient(top,hsla(0,0%,100%,0),hsla(0,0%,100%,.6) 15%,#fff 25%,#fff 75%,hsla(0,0%,100%,.6) 85%,hsla(0,0%,100%,0));

  &::-webkit-scrollbar {
    width: 4px;
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

const IconStyled = styled(Icon)`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 3rem;
  margin-bottom: 3rem;
`;

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

  const handleScrollToMiddle = useCallback(() => {
    parentRef.current.scrollTo({
      top: getPageY(ref.current) - getPageY(parentRef.current) - 200,
      behavior: 'smooth',
    });
  }, [parentRef, ref]);

  useEffect(() => {
    if (isActive) {
      handleScrollToMiddle();
    }
  }, [isActive]);

  return (
    <LyricTextStyled className={cn({ '--is-active': isActive}, className)} ref={ref}>
      {children}
    </LyricTextStyled>
  );
}

const CurrentMusicLyrics = ({ className, isActive }) => {
  const lyricsWrapperRef = useRef();
  const { currentTime } = useGlobalAudio();
  const { music, isHasLyrics } = useGlobalPlayerMusic();

  return (
    <Wrapper className={className}>
      <LyricsWrapper isActive={isActive} ref={lyricsWrapperRef}>
        <li>
          <p style={{ height: '2rem' }} />
        </li>
        {music.lyrics.map((lyric, idx) => (
          <li key={idx}>
            <LyricText parentRef={lyricsWrapperRef} isActive={lyric.timeStart <= currentTime && lyric.timeEnd >= currentTime}>{lyric.text}</LyricText>
          </li>
        ))}
        {!isHasLyrics && (
          <li>
            <LyricText>Lời bài hát đang được cập nhật</LyricText>
          </li>
        )}
        <li>
          <p style={{ height: '2rem' }} />
        </li>
      </LyricsWrapper>
      <IconStyled color="white" name="copy" className={cn({ 'none-important': !isHasLyrics })} />
    </Wrapper>
  );
};

export default CurrentMusicLyrics;

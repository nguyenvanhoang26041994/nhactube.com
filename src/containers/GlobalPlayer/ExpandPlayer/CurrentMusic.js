import React, { useState, useEffect, useCallback, useMemo } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Image, Icon, Tag } from '../../../components/core';
import CurrentMusicLyrics from './CurrentMusicLyrics';
import { useGlobalPlayerMusic } from '../../../hooks';
import { releaseMapper } from '../../../utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  transition: all 0.5s;
  position: relative;
`;

const InforWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  box-sizing: border-box;
`;

const AvatarImage = styled(Image)`
  width: 15em;
  height: 15em;
  border-radius: 999px;
  transition: transform 0.2s cubic-bezier(0.5, 0.5, 1, 1), opacity 0.2s;

  &.--hidden {
    opacity: 0;
  }
`;

const MusicText = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors['gray-400']};

  .__music-name {
    display: flex;
    color: ${props => props.theme.colors.white};
  }
`;

const ToggleMusicPool = styled(Icon)`
  position: absolute;
  left: 1rem;
  top: 1rem;
`;

const CurrentMusicLyricsStyled = styled(CurrentMusicLyrics)`
  padding: 0 0 3rem 0;
  box-sizing: border-box;
`;

const CurrentMusic = ({ className, isMusicPoolActive, isExpanded, onListIconClick }) => {
  const [rotate, setRotate] = useState(0);
  const { music, isHasLyrics } = useGlobalPlayerMusic();

  useEffect(() => {
    let timer;
    if (music.isPlaying) {
      timer = setInterval(() => setRotate(prev => prev + 2), 200);
    }

    return () => clearInterval(timer);
  }, [music.isPlaying, setRotate]);

  return (
    <Wrapper className={className}>
      <ToggleMusicPool
        name="list-music"
        color={isMusicPoolActive ? 'yellow-500' : 'white' }
        onClick={onListIconClick}
      />
      <InforWrapper>
        <AvatarImage
          className={cn({ '--hidden': !isExpanded })}
          src={music.avatarUrl}
          style={{ transform: `rotate(${rotate}deg)` }}
          alt={music.name}
        />
        <div className="flex items-center my-5">
          <Icon
            name="lyrics"
            color={isHasLyrics ? 'yellow-500' : 'white'}
            className="mx-2" size="lg"
          />
          <Icon name="share" color="white" className="mx-2" size="lg" />
          <Icon name="plus" color="white" className="mx-2" size="lg" />
        </div>
        <MusicText className="flex items-center justify-center">
          <span className="__music-name">
            {music.name}
            {releaseMapper[music.release] && <Tag className="ml-1">{releaseMapper[music.release]}</Tag>}
          </span>
          <span className="mx-1">–</span>
          <span className="__channel-name">{music.channel.name}</span>
        </MusicText>
      </InforWrapper>
      <CurrentMusicLyricsStyled />
    </Wrapper>
  );
};

export default CurrentMusic;

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Image, Icon, Tag } from '../../../components/core';
import CurrentSongLyric from './CurrentSongLyric';
import { useGlobalPlayerSong } from '../../../hooks';
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
  color: #fff;
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

const SongText = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.lg};
`;

const ToggleSongPool = styled(Icon)`
  position: absolute;
  left: 1rem;
  top: 1rem;
`;

const CurrentSongLyricStyled = styled(CurrentSongLyric)`
  padding: 0 0 3rem 0;
  box-sizing: border-box;
`;

const CurrentSong = ({ className, isSongPoolActive, isExpanded, onListIconClick }) => {
  const [rotate, setRotate] = useState(0);
  const { song, isHasLyric } = useGlobalPlayerSong();

  useEffect(() => {
    let timer;
    if (song.isPlaying) {
      timer = setInterval(() => setRotate(prev => prev + 2), 200);
    }

    return () => clearInterval(timer);
  }, [song.isPlaying, setRotate]);

  return (
    <Wrapper className={className}>
      <ToggleSongPool
        name="list-music"
        color={isSongPoolActive ? 'yellow-500' : null }
        onClick={onListIconClick}
      />
      <InforWrapper>
        <AvatarImage
          className={cn({ '--hidden': !isExpanded })}
          src={song.avatarUrl}
          style={{ transform: `rotate(${rotate}deg)` }}
          alt={song.name}
        />
        <div className="flex items-center my-5">
          {isHasLyric && (
            <Icon
              name="lyrics"
              className="mx-2" size="lg"
            />
          )}
          <Icon name="share" className="mx-2" size="lg" />
          <Icon name="plus" className="mx-2" size="lg" />
        </div>
        <SongText className="flex items-center justify-center">
          <span>
            {song.name}
            {releaseMapper[song.release] && <Tag className="ml-1">{releaseMapper[song.release]}</Tag>}
          </span>
          <span className="mx-1">–</span>
          <span>{song.artistsName}</span>
        </SongText>
      </InforWrapper>
      <CurrentSongLyricStyled />
    </Wrapper>
  );
};

export default CurrentSong;

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Image, Button, Icon } from '../../../components/core';
import { BlurBackground, CircleIcon } from '../../../components/commons';
import { useGlobalPlayer, useGlobalAudio } from '../../../hooks';
import storageCaches from '../../../utils/storageCaches';

const Wrapper = styled.div`
  display: flex;
  padding: 1.5rem;
  color: #fff;
  user-select: none;
  margin: 1rem 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.1);

  .__name {
    font-size: ${props => props.theme.fontSizes['2xl']};
    font-weight: 600;
  }
`;

const AvatarImage = styled(Image)`
  width: 8em;
  height: 8em;
  border-radius: 2.5px;
  transition: transform 0.2s cubic-bezier(0.5, 0.5, 1, 1), opacity 0.2s;
`;

const RestInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Action = styled.div`
  display: flex;
`;

const SongBar = ({ className, song }) => {
  const { currentSong, changeSong } = useGlobalPlayer();
  const { globalAudio } = useGlobalAudio();

  const playSong = useCallback(() => changeSong(song), [changeSong, song]);

  const playOrPauseSong = useCallback(() => {
    if (currentSong.id !== song.id) {
      return playSong();
    }

    if (globalAudio.paused) {
      return globalAudio.play();
    }

    return globalAudio.pause();
  }, [globalAudio, playSong, currentSong.id, song.id]);

  const iconPlay = useMemo(() => song.isPlaying ? 'pause' : 'play', [song.isPlaying]);
  const isDownloaded = useMemo(() => storageCaches[song.url], [song.url]);

  return (
    <Wrapper className={className}>
      <AvatarImage
        src={song.avatarUrl}
        alt={song.name}
      />
      <div className="flex flex-col mx-5 justify-between">
        <RestInfo>
          <div className="__name my-1">{song.name}</div>
          <div className="__artists my-1">
            {isDownloaded && <Icon name="check" className="mr-1" size="xs" />}
            {song.artistsName}
          </div>
        </RestInfo>
        <Action>
          <Icon name={iconPlay} color="yellow-500" onClick={playOrPauseSong} />
        </Action>
      </div>
    </Wrapper>
  );
};

export default SongBar;

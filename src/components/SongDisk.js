import React, { useEffect, useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Image, Icon } from '../components/core';
import { CircleIcon } from '../components/commons';
import { useGlobalPlayer, useGlobalAudio } from '../hooks';
import storageCaches from '../utils/storageCaches';

const Wrapper = styled.div`
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  user-select: none;
  overflow: hidden;

  .__name {
    font-weight: 600;
  }
`;

const AvatarImage = styled(Image)`
  width: 17em;
  height: 17em;
  border-radius: 999px;
  margin: 0 auto;
  transition: transform 0.2s cubic-bezier(0.5, 0.5, 1, 1), opacity 0.2s;
`;

const RestInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Disk = styled.div`
  position: relative;
`;

const PlayIcon = styled(CircleIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SongTab = ({ className, isPlaying, playOrPauseSong, url, artistsName, name, avatarUrl }) => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => setRotate(prev => prev + 2), 200);
    }

    return () => clearInterval(timer);
  }, [isPlaying, setRotate]);

  const iconPlay = useMemo(() => isPlaying ? 'pause' : 'play', [isPlaying]);
  const isDownloaded = useMemo(() => storageCaches[url], [url]);

  return (
    <Wrapper className={className}>
      <Disk>
        <AvatarImage
          src={avatarUrl}
          alt={name}
          style={{ transform: `rotate(${rotate}deg)` }}
        />
        <PlayIcon name={iconPlay} color="yellow-500" onClick={playOrPauseSong} />
      </Disk>

      <div className="flex flex-col my-5 justify-between">
        <RestInfo>
          <div className="__name my-1">{name}</div>
          <div className="__artists my-1">
            {isDownloaded && <Icon name="check" className="mr-1" size="xs" />}
            {artistsName}
          </div>
        </RestInfo>
      </div>
    </Wrapper>
  );
};

export default SongTab;

import React, { useCallback, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Icon, Image, Slider } from '../../components/core';
import Volume from './Volume';
import { mode as modeConstants } from '../../store/constants';
import { useGlobalPlayer, useGlobalAudio } from '../../hooks';
import{ spin } from '../../global-styles';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  transition: all 0.5s;
  overflow: hidden;
  color: #fff;
  font-weight: 300;
`;

const ControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.125em;
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.xs};

  .__current-time,
  .__duration {
    width: 3em;
    color: ${props => props.theme.colors.textWeak};
  }

  .__current-time {
    display: flex;
    justify-content: flex-end;
  }
`;

const InforWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: 23em;
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;

  .__name {
    font-weight: 400;
    padding: 0.25em;
    color: ${props => props.theme.colors.text};

    &:hover {
      color: ${props => props.theme.colors.link};
    }
  }

  .__artists {
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.textWeak};
    padding: 0.25em;
  }

  .__name,
  .__artists {
    max-width: 20em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Avatar = styled(Image)`
  height: 2.7em;
  width: 2.7em;
  border-radius: 999px;

  &.--spin {
    animation: ${spin} 10s linear infinite;
  }
`;

const RestWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const VolumeStyled = styled(Volume)`
  width: 8em;
`;

const iconModes = Object.freeze({
  [modeConstants.REPEAT]: 'repeat-1',
  [modeConstants.LOOP]: 'repeat',
  [modeConstants.SHUFFLE]: 'random',
});

const MiniPlayer = ({ className, onSongListIconClick, miniPlayerRef, isExpanded, style }) => {
  const { globalAudio, duration, currentTime, changeCurrentTime, durationFormat, currentTimeFormat } = useGlobalAudio();
  const { currentSong, currentMode, goPrevSong, goNextSong, goNextMode } = useGlobalPlayer();
  const playOrPauseSong = useCallback(() => {
    if (globalAudio.paused) {
      return globalAudio.play();
    }

    return globalAudio.pause();
  }, [globalAudio]);

  const handleChangeCurrentTime = useCallback(percent => changeCurrentTime(percent * duration), [changeCurrentTime, duration]);

  const iconPlay = useMemo(() => currentSong.isPlaying ? 'pause' : 'play', [currentSong.isPlaying]);
  const iconMode = useMemo(() => iconModes[currentMode], [currentMode]);

  return (
    <Wrapper className={className} ref={miniPlayerRef} style={style}>
      <InforWrapper className="px-2">
        <Avatar src={currentSong.avatarUrl} className={cn('__avatar', { '--spin': currentSong.isPlaying })} />
        <MainInfo className="ml-2 flex-1">
          <Link to={`/song/${currentSong.id}`} className="__name">
            {currentSong.name}
          </Link>
          <div className="__artists">
            {currentSong.artists.map((artist, idx) => (
              <Link key={artist.id} to={`/artist/${artist.id}`} className="__artist">
                {artist.name}
                {idx + 1 !== currentSong.artists.length && <span>, </span>}
              </Link>
            ))}
          </div>
        </MainInfo>
      </InforWrapper>
      <ControlWrapper className="flex-1 mx-5">
        <PlayWrapper>
          <Icon name="step-backward" onClick={goPrevSong} className="mx-5" />
          <Icon name={iconPlay} size="lg" onClick={playOrPauseSong} className="mx-5" />
          <Icon name="step-forward" onClick={goNextSong} className="mx-5" />
        </PlayWrapper>
        <TimeWrapper>
          <div className="__current-time">{currentTimeFormat}</div>
          <Slider value={currentTime / duration} className="flex-1 mx-2" handleChange={handleChangeCurrentTime} />
          <div className="__duration">{durationFormat}</div>
        </TimeWrapper>
      </ControlWrapper>
      <RestWrapper>
        <Icon name={iconMode} size="lg" onClick={goNextMode} className="mx-3" />
        <Icon name="heart" className="mx-3" />
        <Icon
          name="list-music"
          className="mx-3"
          color={isExpanded ? 'primary-500' : 'text'}
          onClick={onSongListIconClick}
        />
        <Icon name="ellipsis-h" className="mx-3" />
        <VolumeStyled className="mx-3" />
      </RestWrapper>
    </Wrapper>
  );
};

export default MiniPlayer;

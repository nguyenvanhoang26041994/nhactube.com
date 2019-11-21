import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Icon, Image, Slider } from '../../components/core';
import { mode as modeConstants } from '../../store/constants';
import { useGlobalPlayer, useGlobalAudio } from '../../hooks';

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
  justify-content: space-between;
  align-items: center;
  width: 12em;
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.sm};

  .__current-time,
  .__duration {
    width: 3em;
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
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;

  .__name {
    font-weight: 400;
    padding: 0.25em;
    color: ${props => props.theme.colors['yellow-400']};
  }

  .__artists {
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors['gray-300']};
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
  border-radius: 0.15em;
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
      <ControlWrapper>
        <Icon name="step-backward" onClick={goPrevSong} className="ml-2" />
        <Icon name={iconPlay} onClick={playOrPauseSong} />
        <Icon name="step-forward" onClick={goNextSong} />
        <Icon name={iconMode} size="lg" onClick={goNextMode} className="mr-2" />
      </ControlWrapper>
      <TimeWrapper className="flex-1 mx-8">
        <div className="__current-time">{currentTimeFormat}</div>
        <Slider value={currentTime / duration} className="flex-1 mx-2" handleChange={handleChangeCurrentTime} />
        <div className="__duration">{durationFormat}</div>
      </TimeWrapper>
      <InforWrapper className="w-5/12 px-2">
        <Avatar src={currentSong.avatarUrl} className="__avatar" />
        <MainInfo className="ml-2 flex-1">
          <div className="__artists">
            {currentSong.artists.map((artist, idx) => (
              <Link key={artist.id} to={`/artist/${artist.id}`} className="__artist">
                {artist.name}
                {idx + 1 !== currentSong.artists.length && <span>, </span>}
              </Link>
            ))}
          </div>
          <Link to={`/song/${currentSong.id}`} className="__name">
            {currentSong.name}
          </Link>
        </MainInfo>
        <Icon
          name="list-music"
          className="mx-3"
          color={isExpanded ? 'yellow-500' : null}
          onClick={onSongListIconClick}
        />
      </InforWrapper>
    </Wrapper>
  );
};

export default MiniPlayer;

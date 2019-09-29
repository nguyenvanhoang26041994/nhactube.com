import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Icon, Image, Slider } from '../../components/core';
import { CircleIcon } from '../../components/commons';
import { mode as modeConstants } from '../../store/constants';
import { useGlobalPlayer, useGlobalAudio } from '../../hooks';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  transition: all 0.5s;
  overflow: hidden;
`;

const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InforWrapper = styled.div`
  display: flex;
`;

const AvatarImage = styled(Image)`
  height: ${props => props.theme.sizes[12]};
  width: ${props => props.theme.sizes[20]};
  transition: all 0.5s;
`;

const MusicText = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors['gray-400']};

  .__music-name {
    color: ${props => props.theme.colors.white};
  }
`;

const MusicTiming = styled.div`
  font-size: ${props => props.theme.fontSizes['xs']};
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors['gray-400']};

  .__current-time {
    color: ${props => props.theme.colors['yellow-500']};
  }
`;

const OtherControlWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const iconModes = Object.freeze({
  [modeConstants.REPEAT]: 'repeat-1',
  [modeConstants.LOOP]: 'repeat',
  [modeConstants.SHUFFLE]: 'random',
});

const MiniPlayer = ({ className, onMusicListIconClick, miniPlayerRef, isExpanded, style }) => {
  const { globalAudio, muted, duration, currentTime, changeCurrentTime, durationFormat, currentTimeFormat } = useGlobalAudio();
  const { currentMusic, currentMode, goPrevMusic, goNextMusic, goNextMode } = useGlobalPlayer();
  const playOrPauseMusic = useCallback(() => {
    if (globalAudio.paused) {
      return globalAudio.play();
    }

    return globalAudio.pause();
  }, [globalAudio]);

  const handleChangeCurrentTime = useCallback(percent => changeCurrentTime(percent * duration), [changeCurrentTime, duration]);
  const toggleMute = useCallback(() => {
    globalAudio.volume = globalAudio.volume <= 0 ? 1 : 0;
    globalAudio.muted = !globalAudio.muted;
  }, [globalAudio]);

  const iconPlay = useMemo(() => currentMusic.isPlaying ? 'pause' : 'play', [currentMusic.isPlaying]);
  const iconMode = useMemo(() => iconModes[currentMode], [currentMode]);

  return (
    <Wrapper className={className} ref={miniPlayerRef} style={style}>
      <ControlWrapper className="w-3/12">
        <Icon name="step-backward" color="white" onClick={goPrevMusic} className="ml-2" />
        <CircleIcon name={iconPlay} color="yellow-400" onClick={playOrPauseMusic} />
        <Icon name="step-forward" color="white" onClick={goNextMusic} />
        <Icon name={iconMode} color="white" size="lg" onClick={goNextMode} className="mr-2" />
      </ControlWrapper>
      <InforWrapper className="w-7/12 mx-10">
        <AvatarImage className={cn('mr-3', { 'none-important': isExpanded })} src={currentMusic.avatarUrl} />
        <div className="flex flex-col justify-center grow-1">
          <div className="flex items-center justify-between">
            <MusicText>
              <Link to={`/music/${currentMusic.id}`} className="__music-name">{currentMusic.name}</Link>
              <span className="mx-1">-</span>
              <div className="__channel-name">{currentMusic.channel.name}</div>
            </MusicText>
            <MusicTiming>
              <span className="__current-time">{currentTimeFormat}</span>
              <span className="mx-1">-</span>
              <span className="__duration">{durationFormat}</span>
            </MusicTiming>
          </div>
          <Slider value={currentTime / duration} className="w-full" handleChange={handleChangeCurrentTime} />
        </div>
      </InforWrapper>
      <OtherControlWrapper className="w-2/12">
        <div className="flex flex-1">
          <Icon name={muted ? 'volume-mute' : 'volume'} color="white" className="mx-2" size="lg" onClick={toggleMute} />
          <Icon name="ellipsis-h" color="white" className={cn('mx-2', { 'none-important': isExpanded })} />
        </div>
        <CircleIcon
          transparent={!isExpanded}
          name="list-music"
          className="mx-2"
          color="yellow-500"
          onClick={onMusicListIconClick}
        />
      </OtherControlWrapper>
    </Wrapper>
  );
};

export default MiniPlayer;

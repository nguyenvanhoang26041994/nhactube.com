import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Icon, Image, Slider, Tag } from '../../components/core';
import { CircleIcon } from '../../components/commons';
import { mode as modeConstants } from '../../store/constants';
import { useGlobalPlayer, useGlobalAudio } from '../../hooks';
import { releaseMapper } from '../../utils';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  transition: all 0.5s;
  overflow: hidden;
  color: #fff;
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
  height: 2.5rem;
  width: 4rem;
  transition: all 0.5s;
`;

const MusicText = styled.div`
  display: flex;
  align-items: center;
  
  a {
    color: inherit;
  }
`;

const MusicTiming = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.sm};

  .__duration {
    color: ${props => props.theme.colors['gray-400']};
  }
`;

const OtherControlWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const iconModes = Object.freeze({
  [modeConstants.REPEAT]: 'repeat-1',
  [modeConstants.LOOP]: 'repeat',
  [modeConstants.SHUFFLE]: 'random',
});

const MiniPlayer = ({ className, onMusicListIconClick, miniPlayerRef, isExpanded, style }) => {
  const { globalAudio, duration, currentTime, changeCurrentTime, durationFormat, currentTimeFormat } = useGlobalAudio();
  const { currentMusic, currentMode, goPrevMusic, goNextMusic, goNextMode } = useGlobalPlayer();
  const playOrPauseMusic = useCallback(() => {
    if (globalAudio.paused) {
      return globalAudio.play();
    }

    return globalAudio.pause();
  }, [globalAudio]);

  const handleChangeCurrentTime = useCallback(percent => changeCurrentTime(percent * duration), [changeCurrentTime, duration]);

  const iconPlay = useMemo(() => currentMusic.isPlaying ? 'pause' : 'play', [currentMusic.isPlaying]);
  const iconMode = useMemo(() => iconModes[currentMode], [currentMode]);

  return (
    <Wrapper className={className} ref={miniPlayerRef} style={style}>
      <ControlWrapper className="w-3/12">
        <Icon name="step-backward" onClick={goPrevMusic} className="ml-2" />
        <CircleIcon name={iconPlay} color="yellow-500" onClick={playOrPauseMusic} />
        <Icon name="step-forward" onClick={goNextMusic} />
        <Icon name={iconMode} size="lg" onClick={goNextMode} className="mr-2" />
      </ControlWrapper>
      <InforWrapper className="w-8/12 mx-10">
        <AvatarImage className={cn('mr-3', { 'none-important': isExpanded })} src={currentMusic.avatarUrl} alt={currentMusic.name} />
        <div className="flex flex-col justify-center grow-1">
          <div className="flex items-center justify-between">
            <MusicText>
              <Link to={`/music/${currentMusic.id}`}>
                {currentMusic.name}
                {releaseMapper[currentMusic.release] && <Tag className="ml-1">{releaseMapper[currentMusic.release]}</Tag>}
              </Link>
              <span className="mx-1">-</span>
              <div>{currentMusic.channel.name}</div>
            </MusicText>
            <MusicTiming>
              <span>{currentTimeFormat}</span>
              <span className="mx-1">/</span>
              <span className="__duration">{durationFormat}</span>
            </MusicTiming>
          </div>
          <Slider value={currentTime / duration} className="w-full" handleChange={handleChangeCurrentTime} />
        </div>
      </InforWrapper>
      <OtherControlWrapper className="w-1/12">
        <CircleIcon
          transparent={!isExpanded}
          name="list-music"
          className="mx-2"
          color={isExpanded ? 'yellow-500' : null}
          onClick={onMusicListIconClick}
        />
      </OtherControlWrapper>
    </Wrapper>
  );
};

export default MiniPlayer;

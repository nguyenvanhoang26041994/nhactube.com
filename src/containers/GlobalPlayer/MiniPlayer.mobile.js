import React, { useCallback, useMemo } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Icon, Image } from '../../components/core';
import { useGlobalPlayer, useGlobalAudio } from '../../hooks';
import{ spin } from '../../global-styles';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  background-color: ${props => props.theme.colors['gray-200']};
`;

const StyledIcon = styled(Icon)`
  color: ${props => props.theme.colors['primary-400']};
`;

const InforWrapper = styled.div`
  display: flex;

  .__name {
    font-weight: 400;
  }

  .__artists-name {
    color: ${props => props.theme.colors.textWeak};
  }
`;

const Avatar = styled(Image)`
  border-radius: 999px;
  width: 3rem;
  height: 3rem;

  &.--spin {
    animation: ${spin} 10s linear infinite;
  }
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 3rem);
`;

const ControlWrapper = styled.div`
  display: flex;
`;

const MiniPlayer = ({}) => {
  const { globalAudio, duration, changeCurrentTime } = useGlobalAudio();
  const { currentSong, goNextSong } = useGlobalPlayer();
  const playOrPauseSong = useCallback(() => {
    if (globalAudio.paused) {
      return globalAudio.play();
    }

    return globalAudio.pause();
  }, [globalAudio]);

  const handleChangeCurrentTime = useCallback(percent => changeCurrentTime(percent * duration), [changeCurrentTime, duration]);

  const iconPlay = useMemo(() => currentSong.isPlaying ? 'pause' : 'play', [currentSong.isPlaying]);

  return (
    <Wrapper className="px-3">
      <InforWrapper className="flex-1">
        <Avatar src={currentSong.avatarUrl} className={cn('__avatar', { '--spin': currentSong.isPlaying })} />
        <MainInfo className="ml-2">
          <span className="__name mb-1">{currentSong.name}</span>
          <span className="__artists-name">{currentSong.artistsName}</span>
        </MainInfo>
      </InforWrapper>
      <ControlWrapper className="flex">
        <StyledIcon name={iconPlay} size="lg" className="mx-3" onClick={playOrPauseSong} />
        <StyledIcon name="step-forward" size="lg" className="mx-3" onClick={goNextSong} />
      </ControlWrapper>
    </Wrapper>
  );
};

export default MiniPlayer;

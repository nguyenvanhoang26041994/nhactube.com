import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

import { Icon, Slider } from '../../../components/core';
import { mode as modeConstants } from '../../../store/constants';
import { useGlobalAudio, useGlobalPlayer } from '../../../hooks';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const TimeWrapper = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.xs};

  .__current-time,
  .__duration {
    width: 5em;
    color: ${props => props.theme.colors['gray-300']};
  }

  .__current-time {
    display: flex;
    justify-content: flex-end;
  }
`;

const MainControlWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const iconModes = Object.freeze({
  [modeConstants.REPEAT]: 'repeat-1',
  [modeConstants.LOOP]: 'repeat',
  [modeConstants.SHUFFLE]: 'random',
});

const PlayerControl = ({ className }) => {
  const { globalAudio, duration, currentTime, changeCurrentTime, durationFormat, currentTimeFormat } = useGlobalAudio();
  const { currentSong, goNextSong, goPrevSong, goNextMode, currentMode } = useGlobalPlayer();
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
    <Wrapper className={className}>
      <TimeWrapper>
        <div className="__current-time">{currentTimeFormat}</div>
        <Slider value={currentTime / duration} className="flex-1 mx-2" handleChange={handleChangeCurrentTime} />
        <div className="__duration">{durationFormat}</div>
      </TimeWrapper>
      <MainControlWrapper>
        <Icon name={iconMode} size="lg" onClick={goNextMode} className="mx-5" />
        <div className="flex justify-center">
          <Icon name="step-backward" onClick={goPrevSong} size="lg" className="mx-5" />
          <Icon name={iconPlay} onClick={playOrPauseSong} size="lg" className="mx-5" />
          <Icon name="step-forward" onClick={goNextSong} size="lg" className="mx-5" />
        </div>
        <Icon name="list-music" size="lg" className="mx-5" />
      </MainControlWrapper>
    </Wrapper>
  );
};

PlayerControl.displayName = 'PlayerControl';
PlayerControl.propTypes = {
  clssName: PropTypes.string,
};
PlayerControl.defaultProps = {};

export default PlayerControl;

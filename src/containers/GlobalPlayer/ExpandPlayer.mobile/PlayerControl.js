import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

import { Icon } from '../../../components/core';
import { mode as modeConstants } from '../../../store/constants';
import { useGlobalAudio, useGlobalPlayer } from '../../../hooks';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BlueIcon = styled(Icon)`
  color: ${props => props.theme.colors['primary-400']};
`;

const iconModes = Object.freeze({
  [modeConstants.REPEAT]: 'repeat-1',
  [modeConstants.LOOP]: 'repeat',
  [modeConstants.SHUFFLE]: 'random',
});

const PlayerControl = ({ className }) => {
  const { globalAudio } = useGlobalAudio();
  const { currentSong, goNextSong, goPrevSong, goNextMode, currentMode } = useGlobalPlayer();
  const playOrPauseSong = useCallback(() => {
    if (globalAudio.paused) {
      return globalAudio.play();
    }

    return globalAudio.pause();
  }, [globalAudio]);

  const iconPlay = useMemo(() => currentSong.isPlaying ? 'pause' : 'play', [currentSong.isPlaying]);
  const iconMode = useMemo(() => iconModes[currentMode], [currentMode]);

  return (
    <Wrapper className={className}>
      <Icon name={iconMode} size="xl" onClick={goNextMode} className="mx-5" />
      <div className="flex justify-center">
        <Icon name="step-backward" onClick={goPrevSong} size="xl" className="mx-5" />
        <Icon name={iconPlay} onClick={playOrPauseSong} size="xl" className="mx-5" />
        <Icon name="step-forward" onClick={goNextSong} size="xl" className="mx-5" />
      </div>
      <Icon name="list-music" size="xl" className="mx-5" />
    </Wrapper>
  );
};

PlayerControl.displayName = 'PlayerControl';
PlayerControl.propTypes = {
  clssName: PropTypes.string,
};
PlayerControl.defaultProps = {};

export default PlayerControl;

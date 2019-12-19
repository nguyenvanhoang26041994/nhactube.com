import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

import { Icon } from '../../../components/core';
import { useGlobalAudio, useGlobalPlayer } from '../../../hooks';

const Wrapper = styled.div``;

const BlueIcon = styled(Icon)`
  color: ${props => props.theme.colors['primary-400']};
`;

const PlayerControl = ({ className }) => {
  const { globalAudio } = useGlobalAudio();
  const { currentSong, goNextSong, goPrevSong } = useGlobalPlayer();
  const playOrPauseSong = useCallback(() => {
    if (globalAudio.paused) {
      return globalAudio.play();
    }

    return globalAudio.pause();
  }, [globalAudio]);

  const iconPlay = useMemo(() => currentSong.isPlaying ? 'pause' : 'play', [currentSong.isPlaying]);

  return (
    <Wrapper className={className}>
      <div className="flex justify-center">
        <Icon name="step-backward" onClick={goPrevSong} size="2xl" className="mx-5" />
        <Icon name={iconPlay} onClick={playOrPauseSong} size="2xl" className="mx-5" />
        <Icon name="step-forward" onClick={goNextSong} size="2xl" className="mx-5" />
      </div>
    </Wrapper>
  );
};

PlayerControl.displayName = 'PlayerControl';
PlayerControl.propTypes = {
  clssName: PropTypes.string,
};
PlayerControl.defaultProps = {};

export default PlayerControl;

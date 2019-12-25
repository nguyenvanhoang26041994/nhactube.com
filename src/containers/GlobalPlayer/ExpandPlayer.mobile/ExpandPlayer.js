import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

import { Icon, Image } from '../../../components/core';
import PlayerControl from './PlayerControl';
import { BlurBackground, SongKaraoke } from '../../../components/commons';
import SongHeader from './SongHeader';
import { useGlobalPlayerSong, useGlobalAudio } from '../../../hooks';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 999;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #000;
  color: #fff;

  .__player-control {
    display: flex;
    align-items: center;
  }

  .__song {
    .__artists-name {
      color: #dadde0;
    }

    .__lyric-line.--active {
      color: ${props => props.theme.colors['yellow-500']};
    }
  }
`;

const BlurBackgroundStyled = styled(BlurBackground)`
  z-index: 0;
`;

const SongHeaderStyled = styled(SongHeader)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const SongKaraokeStyled = styled(SongKaraoke)`
  max-height: calc(100vh - 15rem);
  margin-top: 5rem;
  margin-bottom: 7rem;

  .__lyric-line.--active {
    color: ${props => props.theme.colors['yellow-500']};
  }
`;

const PlayerControlStyled = styled(PlayerControl)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const ExpandPlayer = ({ className, onClose }) => {
  const { song } = useGlobalPlayerSong();
  const { currentTime } = useGlobalAudio();

  return (
    <Container className={className}>
      <Wrapper>
        <BlurBackgroundStyled />
        <SongHeaderStyled {...song} onDownClick={onClose} />
        <SongKaraokeStyled
          lyric={song.lyric}
          currentTime={song.isPlaying ? currentTime : 0}
        />
        <PlayerControlStyled className="__player-control" />
      </Wrapper>
    </Container>
  );
};

ExpandPlayer.displayName = 'ExpandPlayer.mobile';
ExpandPlayer.propTypes = {
  onClose: PropTypes.func,
  className: PropTypes.string,
};
ExpandPlayer.defaultProps = {
  onClose: f => f,
};

export default ExpandPlayer;

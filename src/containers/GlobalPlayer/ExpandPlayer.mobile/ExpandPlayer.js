import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

import { Icon, Image } from '../../../components/core';
import PlayerControl from './PlayerControl';
import { BlurBackground } from '../../../components/commons';
import SongHeader from './SongHeader';
import { useGlobalPlayerSong } from '../../../hooks';
import { spin } from '../../../global-styles';

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

const Avatar = styled(Image)`
  height: 24rem;
  width: 24rem;
  max-width: 100%;
  z-index: 1;
  margin: 8rem auto;
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
  return (
    <Container className={className}>
      <Wrapper>
        <BlurBackgroundStyled />
        <SongHeaderStyled {...song} onDownClick={onClose} />
        <Avatar src={song.avatarUrl} />
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

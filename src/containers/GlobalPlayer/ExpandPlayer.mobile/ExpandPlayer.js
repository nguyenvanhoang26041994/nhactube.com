import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

import { Icon } from '../../../components/core';
import { Song } from '../../../components/commons';
import PlayerControl from './PlayerControl';
import { BlurBackground } from '../../../components/commons';
import { useGlobalPlayerSong } from '../../../hooks';

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
    height: 6rem;
    display: flex;
    align-items: flex-start;
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
const CloseIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const BlurBackgroundStyled = styled(BlurBackground)`
  z-index: 0;
`;

const ExpandPlayer = ({ className, onClose }) => {
  const { song } = useGlobalPlayerSong();
  return (
    <Container className={className}>
      <Wrapper>
        <BlurBackgroundStyled />
        <CloseIcon name="chevron-down" size="xl" className="m-2" onClick={onClose} />
        <Song song={song} className="__song flex-1" />
        <PlayerControl className="__player-control" />
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

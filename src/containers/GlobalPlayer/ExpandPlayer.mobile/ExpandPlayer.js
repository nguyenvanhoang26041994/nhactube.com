import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

import { Icon } from '../../../components/core';
import { Song } from '../../../components/commons';
import PlayerControl from './PlayerControl';
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
  background-color: #fff;

  > .__song {
    max-height: 55rem;
  }
`;
const CloseIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const ExpandPlayer = ({ className, onClose }) => {
  const { song } = useGlobalPlayerSong();
  return (
    <Container className={className}>
      <Wrapper>
        <CloseIcon name="chevron-down" size="xl" className="m-2" onClick={onClose} />
        <Song song={song} className="flex-1" />
        <PlayerControl className="pb-10" />
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

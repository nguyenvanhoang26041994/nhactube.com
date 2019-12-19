import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';

import GlobalAudio from '../GlobalAudio';
import MiniPlayer from './MiniPlayer.mobile';
import ExpandPlayer from './ExpandPlayer.mobile';
import { useGlobalPlayerSong } from '../../hooks';

const Wrapper = styled.div`
  transition: all 0.5s;
`;

const GlobalPlayer = ({ className, style }) => {
  const [expanded, setExpanded] = useState(false);
  const { song } = useGlobalPlayerSong();
  return (
    <Wrapper
      style={{
        opacity: song.url ? '1' : '0',
        ...style,
      }}
      className={className}
    >
      <GlobalAudio />
      <MiniPlayer onClick={() => setExpanded(true)} />
      <ExpandPlayer className={cn({ 'hidden': !expanded })} onClose={() => setExpanded(false)} />
    </Wrapper>
  );
};

GlobalPlayer.displayName = 'GlobalPlayer.mobile';
GlobalPlayer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};
GlobalPlayer.defaultProps = {};

export default GlobalPlayer;

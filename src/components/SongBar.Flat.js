import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.colors['gray-300']};
  padding: 0.5em 0.75em;
`;

const SongBar = ({
  className,
  isActive,
  isPlaying,
  isDownloaded,
  avatarUrl,
  name,
  artistsName,
  onClick,
  hiddenActions,
}) => {
  return (
    <Wrapper className={cn({ '--active': isActive || isPlaying }, className)} onClick={onClick}>
      <div>
        {name}
      </div>
    </Wrapper>
  );
};

export default SongBar;

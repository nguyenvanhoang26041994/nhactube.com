import React, { useCallback } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Icon } from '../../components/core';

import { useGlobalPlayerSong } from '../../hooks';
import { releaseMapper, storageCaches } from '../../utils';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  color: ${props => props.theme.colors['gray-400']};
  height: 3.5rem;
  cursor: pointer;

  .__name,
  .__artists-name {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .__artists-name {
    font-size: ${props => props.theme.fontSizes.sm};
  }

  .__actions {
    position: absolute;
    right: 0;
    padding-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    opacity: 0;
  }

  &:hover {
    .__actions {
      opacity: 1;
    }
  }

  &.--is-active {
    font-weight: 900;
    color: #fff;
  }
`;

const SongItem = ({ className, firstText, ...song }) => {
  const { actions: { changeSong }} = useGlobalPlayerSong();

  const onClick = useCallback(() => changeSong(song), [changeSong]);

  return (
    <Wrapper
      className={cn(className, { '--is-active': song.isActive, } )}
      onClick={onClick}
    >
      <div className="flex flex-col px-8 flex-1">
        <span className="__name mb-2">
          {song.name}
          {releaseMapper[song.release] && `(${releaseMapper[song.release]})`}
        </span>
        <span className="__artists-name">
          {storageCaches[song.url] && <Icon name="check" className="mr-1" size="xs" />}
          {song.artistsName}
        </span>
      </div>
      <div className="__actions">
        <Icon name="ellipsis-h" />
      </div>
    </Wrapper>
  );
};

export default SongItem;

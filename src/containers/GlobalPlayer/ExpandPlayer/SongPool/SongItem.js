import React, { useCallback } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Icon, Tag } from '../../../../components/core';

import { useGlobalPlayerSong } from '../../../../hooks';
import { releaseMapper, storageCaches } from '../../../../utils';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  color: #fff;
  height: 3.5rem;
  cursor: pointer;

  .__release-tag {
    border-color: #fff;
    margin: 0 0.5rem;
  }

  .__name,
  .__artists-name {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .__artists-name {
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors['gray-400']};
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
    color: ${props => props.theme.colors['yellow-500']};

    .__artists-name {
      color: ${props => props.theme.colors['yellow-500']};
    }

    .__release-tag {
      border-color: ${props => props.theme.colors['yellow-500']};
    }
  }
`;

const SongItem = ({ className, firstText, ...song }) => {
  const { song: currentSong, actions: { changeSong }} = useGlobalPlayerSong();

  const onClick = useCallback(() => changeSong(song), [changeSong]);

  return (
    <Wrapper
      className={cn(
        {
          '--is-active': currentSong.id === song.id,
        },
        className
      )}
      onClick={onClick}
    >
      <div className="flex flex-col px-8 flex-1">
        <span className="mb-2">
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

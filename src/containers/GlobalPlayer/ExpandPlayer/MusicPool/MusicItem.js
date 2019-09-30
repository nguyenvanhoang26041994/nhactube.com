import React, { useCallback } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Icon } from '../../../../components/core';

import { useGlobalPlayerMusic } from '../../../../hooks';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  height: 3.5rem;
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.base};

  .__name,
  .__channel-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .__channel-name {
    color: ${props => props.theme.colors['gray-400']};
    font-size: ${props => props.theme.fontSizes.sm};
  }

  .__first-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .__actions {
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

    .__channel-name {
      color: ${props => props.theme.colors['yellow-400']};
    }
  }
`;

const MusicItem = ({ className, firstText, ...music }) => {
  const { music: currentMusic, actions: { changeMusic }} = useGlobalPlayerMusic();
  const onClick = useCallback(() => changeMusic(music), [changeMusic, music]);

  return (
    <Wrapper
      className={cn(
        {
          '--is-active': currentMusic.id === music.id,
        },
        className
      )}
      onClick={onClick}
    >
      <div className="__first-text w-2/12">{firstText}</div>
      <div className="w-7/12 flex flex-col">
        <span className="__name mb-2">{music.name}</span>
        <span className="__channel-name">{music.channel.name}</span>
      </div>
      <div className="__actions w-3/12">
        <Icon name="ellipsis-h" />
      </div>
    </Wrapper>
  );
};

export default MusicItem;

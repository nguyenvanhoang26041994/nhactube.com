import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Image, Icon } from '../components/core';
import { spin } from '../global-styles';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.colors['gray-300']};
  padding: 0.75em;

  .__avatar {
    height: 5.4rem;
    width: 5.4rem;
    border-radius: 0.15em;
    transition: border-radius 0.3s;
  }

  .__name {
    font-weight: 400;
    color: #fff;
  }

  .__actions {
    width: 4em;
  }

  .__artists-name {
    font-size: ${props => props.theme.fontSizes.sm};
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);

    .__avatar {
      img {
        filter: blur(2px) brightness(0.5) grayscale(0.6);
        transform: scale(1.1);
      }
    }
  }

  &:hover,
  &.--active,
  &.--playing {
    .__name {
      color: ${props => props.theme.colors['yellow-400']};
    }

    .__avatar {
      border-radius: 999px;
    }
  }

  &.--playing {
    .__avatar {
      animation: ${spin} 10s linear infinite;
    }
  }
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
    <Wrapper className={cn({ '--active': isActive, '--playing': isPlaying }, className)} onClick={onClick}>
      <div className="flex flex-1">
        <Image src={avatarUrl} className="__avatar" />
        <div className="flex flex-col ml-2">
          <div className="__name flex items-base p-1">
            {isDownloaded && <Icon name="check" className="mr-1" size="xs" />}
            {name}
          </div>
          <div className="__artists-name p-1">
            <span>{artistsName}</span>
          </div>
        </div>
      </div>
      {!hiddenActions && (
        <div className="__actions flex justify-end">
          <Icon name="ellipsis-h" />
        </div>
      )}
    </Wrapper>
  );
};

export default SongBar;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';

import { Icon, Image } from '../../../components/core';
import { spin } from '../../../global-styles';

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  padding: 0.5em 0.75em;
`;

const Avatar = styled(Image)`
  height: 2.7rem;
  width: 2.7rem;
  border-radius: 999px;

  &.--playing {
    animation: ${spin} 10s linear infinite;
  }
`;

const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  .__name {
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .__artists-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors['gray-300']};
  }
`;

const SongHeader = ({
  className,
  name,
  avatarUrl,
  isPlaying,
  artistsName,
  onDownClick,
}) => {
  return (
    <Wrapper className={className}>
      <Avatar src={avatarUrl} className={cn({ '--playing': isPlaying })} />
      <InfoWrapper className="ml-1 flex-1">
        <div className="__name flex items-base p-1">
          {name}
        </div>
        <div className="__artists-name p-1">
          {artistsName}
        </div>
      </InfoWrapper>
      <Icon name="chevron-down" size="xl" className="m-2" onClick={onDownClick} />
    </Wrapper>
  );
};

SongHeader.displayName = 'SongHeader';
SongHeader.propTypes = {
  className: PropTypes.string,
};
SongHeader.defaultProps = {};

export default SongHeader;

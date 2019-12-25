import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';

import { Icon } from '../../../components/core';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.5em 0.75em;
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
  artistsName,
  onDownClick,
}) => {
  return (
    <Wrapper className={className}>
      <InfoWrapper>
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

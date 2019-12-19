import React, { useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon, Image } from '../components/core';

const MusicAvatar = styled(Image)`
  width: 100%;
  height: 9rem;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.25em;
  user-select: none;

  &:hover,
  &.--hover {
    color: ${props => props.theme.colors['primary-600']};
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  &.--bold {
    font-weight: 400;
  }
`;

const SongCard = ({ className, name, artists, isActive, isDownloaded, onClick, avatarUrl }) => {
  const artistsName = useMemo(() => artists.map(art => art.name).join(', '), [artists]);

  return (
    <Wrapper className={cn({ '--is-active': isActive }, className)} onClick={onClick}>
      <MusicAvatar src={avatarUrl} className="__logo" />
      <InfoWrapper className="w-full flex flex-col justify-center mt-3">
        <Text className="mb-2 --bold">{name}</Text>
        <Text style={{ whiteSpace: 'nowrap' }}>
          {isDownloaded && <Icon name="check" className="mr-1" size="xs" />}
          {artistsName}
        </Text>
      </InfoWrapper>
    </Wrapper>
  );
};

SongCard.displayName = 'SongCard';
SongCard.propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  artists: PropTypes.array,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  isDownloaded: PropTypes.bool,
};

SongCard.defaultProps = {
  artists: [],
  onClick: f => f,
};

export default SongCard;

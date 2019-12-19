import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Image } from '../components/core';

const Avatar = styled(Image)`
  width: 100%;
  height: 13em;
`;

const Wrapper = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const Text = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
`;

const PlaylistCard = ({ className, name, avatarUrl, onClick }) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      <Avatar className="__avatar" src={avatarUrl} />
      <Text className="my-3">{name}</Text>
    </Wrapper>
  );
};

PlaylistCard.displayName = 'PlaylistCard';
PlaylistCard.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
};
PlaylistCard.defaultProps = {
  onClick: f => f,
};

export default PlaylistCard;

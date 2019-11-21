import React from 'react';
import styled from 'styled-components';
import { Image } from '../components/core';

const Avatar = styled(Image)`
  width: 100%;
  height: 7em;

  img {
    filter: brightness(0.4);
  }
`;

const Wrapper = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  color: #fff;
  position: relative;

  &:hover,
  &.--hover {
    color: ${props => props.theme.colors['yellow-400']};
  }
`;

const Text = styled.div`
  position: absolute;
  width: 100%;
  white-space: pre-wrap;
  font-weight: 400;
  text-transform: uppercase;
  vertical-align: center;
  text-align: center;
`;

const PlaylistCard = ({ className, name, avatarUrl,onClick }) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      <Avatar className="__avatar" src={avatarUrl} />
      <Text className="my-3">{name}</Text>
    </Wrapper>
  );
};

export default PlaylistCard;

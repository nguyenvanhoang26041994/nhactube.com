import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Image } from '../../components/core';
import Skeleton from './Skeleton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  max-width: 14.5rem;
`;

const StyledImage = styled(Image)`
  height: 7.34375rem;
`;

const OtherInfoStyled = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NameStyled = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${props => props.theme.fontSizes[props.size] || null};
  color: ${props => props.theme.colors[props.color]};
`;

const MusicCard = ({ className, avatarUrl, name, channel, onClick }) => {
  return (
    <Wrapper className={className}>
      <StyledImage src={avatarUrl} onClick={onClick} />
      <OtherInfoStyled className="w-full flex flex-col justify-center">
        <NameStyled color="white" size="base" className="mb-2">{name}</NameStyled>
        <NameStyled color="gray-500" size="sm">{channel.name}</NameStyled>
      </OtherInfoStyled>
    </Wrapper>
  );
};

MusicCard.propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  channel: PropTypes.object,
  onClick: PropTypes.func,
};

MusicCard.defaultProps = {
  channel: {},
  onClick: f => f,
};

MusicCard.Skeleton = Skeleton;

export default MusicCard;

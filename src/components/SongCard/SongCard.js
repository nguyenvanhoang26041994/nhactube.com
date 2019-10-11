import React, { useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon } from '../../components/core';

const SVG = (props) => (
  <svg {...props} viewBox="0 0 55 55">
    <path d="M52.66,0.249c-0.216-0.189-0.501-0.275-0.789-0.241l-31,4.011C20.373,4.084,20,4.507,20,5.01v6.017v4.212v25.384  C18.174,38.428,15.273,37,12,37c-5.514,0-10,4.037-10,9s4.486,9,10,9s10-4.037,10-9c0-0.232-0.019-0.46-0.039-0.687  C21.974,45.248,22,45.189,22,45.121V16.118l29-3.753v18.257C49.174,28.428,46.273,27,43,27c-5.514,0-10,4.037-10,9s4.486,9,10,9  c5.464,0,9.913-3.966,9.993-8.867c0-0.013,0.007-0.024,0.007-0.037V11.227V7.016V1C53,0.712,52.876,0.438,52.66,0.249z M12,53  c-4.411,0-8-3.141-8-7s3.589-7,8-7s8,3.141,8,7S16.411,53,12,53z M43,43c-4.411,0-8-3.141-8-7s3.589-7,8-7s8,3.141,8,7  S47.411,43,43,43z M22,14.101v-3.074V5.889l29-3.752v4.879v3.332L22,14.101z" />
  </svg>
);

const SVGStyled = styled(SVG)`
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 auto;
  fill: rgba(255, 255, 255, 0.7);
`;

const Wrapper = styled.div`
  cursor: pointer;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.05);
  max-width: 12rem;
  height: 12rem;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.25em;

  &.--is-active {
    color: ${props => props.theme.colors['yellow-500']};
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
  text-align: center;
`;

const SongCard = ({ className, name, artists, isActive, isPlaying, isDownloaded, onClick }) => {
  const artistsName = useMemo(() => artists.map(art => art.name).join(', '), [artists]);

  return (
    <Wrapper className={cn({ '--is-active': isActive }, className)} onClick={onClick}>
      <SVGStyled />
      <InfoWrapper className="w-full flex flex-col justify-center mt-3">
        <Text className="mb-2">{name}</Text>
        <Text style={{ whiteSpace: 'nowrap' }}>
          {isDownloaded && <Icon name="check" className="mr-1" size="xs" />}
          {artistsName}
        </Text>
      </InfoWrapper>
    </Wrapper>
  );
};

SongCard.propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  artists: PropTypes.array,
  onClick: PropTypes.func,
};

SongCard.defaultProps = {
  artists: [],
  onClick: f => f,
};

export default SongCard;

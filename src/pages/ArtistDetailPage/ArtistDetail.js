import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { Image } from '../../components/core';
import { useArtistDetail } from './hooks';

const Wrapper = styled.div`
  display: flex;
`;

const Avatar = styled(Image)`
  width: 4rem;
  height: 4rem;
  border-radius: 999px;
`;

const ArtistDetail = ({ className }) => {
  const { id } = useParams();
  const { actions, artist } = useArtistDetail();

  useEffect(() => {
    actions.fetchArtist(id);
  }, [id]);

  return (
    <Wrapper className={cn('container mx-auto', className)}>
      <div className="flex items-center">
        <Avatar src={artist.avatarUrl} />
        <div className="ml-2">{artist.name}</div>
      </div>
    </Wrapper>
  );
};

ArtistDetail.displayName = 'ArtistDetail';
ArtistDetail.propTypes = {
  className: PropTypes.string,
};
ArtistDetail.defaultProps = {};

export default ArtistDetail;

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import PlaylistCard from '../components/PlaylistCard';

const PlaylistCardContainer = ({ onClick, ...otherProps }) => {
  const history = useHistory();
  const _onClick = useCallback(() => {
    history.push(otherProps.link);
  }, []);

  return (
    <PlaylistCard
      {...otherProps}
      onClick={_onClick}
    />
  );
};

PlaylistCardContainer.displayName = 'PlaylistCardContainer';
PlaylistCardContainer.propTypes = {
  onClick: PropTypes.func,
  link: PropTypes.string,
};
PlaylistCardContainer.defaultProps = {
  onClick: f => f,
};

export default PlaylistCardContainer;

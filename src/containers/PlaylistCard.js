import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PlaylistCard from '../components/PlaylistCard';

export default ({ onClick, ...otherProps }) => {
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

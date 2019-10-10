import React, { useCallback } from 'react';
import SongCard from '../components/SongCard';
import useGlobalPlayerSong from '../hooks/useGlobalPlayerSong';

export default (props) => {
  const { actions: { changeSong } } = useGlobalPlayerSong();
  const onClick = useCallback(() => changeSong(props), [changeSong]);

  return (
    <SongCard onClick={onClick} {...props} />
  );
};

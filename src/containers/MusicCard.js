import React, { useCallback } from 'react';
import MusicCard from '../components/MusicCard';
import useGlobalPlayerMusic from '../hooks/useGlobalPlayerMusic';

export default (props) => {
  const { actions: { changeMusic } } = useGlobalPlayerMusic();
  const onClick = useCallback(() => changeMusic(props), [changeMusic]);

  return (
    <MusicCard onClick={onClick} {...props} />
  );
};

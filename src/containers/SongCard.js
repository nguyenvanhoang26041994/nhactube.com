import React, { useCallback, useMemo } from 'react';
import SongCard from '../components/SongCard';
import useGlobalPlayer from '../hooks/useGlobalPlayer';
import storageCaches from '../utils/storageCaches';
import { songSelector } from '../store/selectors';


export default (props) => {
  const { changeSong, currentSong } = useGlobalPlayer();
  const onClick = useCallback(() => changeSong(props), [changeSong]);
  const song = useMemo(() => songSelector(props), [props]);

  const isActive = currentSong.id === props.id;
  const isDownloaded = useMemo(() => storageCaches[song.url], [song.url]);

  return (
    <SongCard
      onClick={onClick}
      isActive={isActive}
      isDownloaded={isDownloaded}
      isPlaying={isActive && currentSong.isPlaying}
      avatar
      {...song}
    />
  );
};

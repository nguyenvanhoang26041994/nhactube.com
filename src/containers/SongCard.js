import React, { useCallback, useMemo } from 'react';
import SongCard from '../components/SongCard';
import useGlobalPlayer from '../hooks/useGlobalPlayer';
import storageCaches from '../utils/storageCaches';

const storageUri = 'https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com';

export default (props) => {
  const { changeSong, currentSong } = useGlobalPlayer();
  const onClick = useCallback(() => changeSong(props), [changeSong]);
  const url = useMemo(() => props.id ? `${storageUri}/o/songs%2F${props.id}.mp3?alt=media` : '', [props.id]);

  const isActive = currentSong.id === props.id;
  const isDownloaded = useMemo(() => storageCaches[url], [url]);

  return (
    <SongCard
      onClick={onClick}
      isActive={isActive}
      isDownloaded={isDownloaded}
      isPlaying={isActive && currentSong.isPlaying}
      {...props}
    />
  );
};

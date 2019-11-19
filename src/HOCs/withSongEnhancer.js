import React, { useCallback, useMemo } from 'react';

import useGlobalPlayer from '../hooks/useGlobalPlayer';
import storageCaches from '../utils/storageCaches';
import { songSelector } from '../store/selectors';

const withSongEnhancer = (Component) => {
  const ReturnComponent = (props) => {
    const { changeSong, currentSong } = useGlobalPlayer();
    const onClick = useCallback(() => changeSong(props), [changeSong]);
    const song = useMemo(() => songSelector(props), [props]);

    const isActive = currentSong.id === props.id;
    const isDownloaded = useMemo(() => storageCaches[song.url], [song.url]);
    const isPlaying = isActive && currentSong.isPlaying

    return (
      <Component
        onClick={onClick}
        isActive={isActive}
        isDownloaded={isDownloaded}
        isPlaying={isPlaying}
        {...song}
      />
    );
  };

  ReturnComponent.displayName = `withSongEnhancer(${Component.displayName || Component.name || 'Component'})`;

  return ReturnComponent;
};

export default withSongEnhancer;

import React, { useCallback } from 'react';
import { SongDisk } from '../../components/commons';
import { useGlobalPlayer, useGlobalAudio } from '../../hooks';

const SongTab = ({ className, song }) => {
  const { currentSong, changeSong } = useGlobalPlayer();
  const { globalAudio } = useGlobalAudio();

  const playSong = useCallback(() => changeSong(song), [changeSong, song]);

  const playOrPauseSong = useCallback(() => {
    if (currentSong.id !== song.id) {
      return playSong();
    }

    if (globalAudio.paused) {
      return globalAudio.play();
    }

    return globalAudio.pause();
  }, [globalAudio, playSong, currentSong.id, song.id]);

  return (
    <SongDisk
      className={className}
      isPlaying={song.isPlaying}
      name={song.name}
      playOrPauseSong={playOrPauseSong}
      avatarUrl={song.avatarUrl}
      artistsName={song.artistsName}
    />
  );
};

export default SongTab;

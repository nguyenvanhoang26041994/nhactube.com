import { useMemo, useCallback } from 'react';
import { mode as modeConstants } from '../store/constants';
import useGlobalPlayerMode from './useGlobalPlayerMode';
import useGlobalPlayerSong from './useGlobalPlayerSong';
import useGlobalPlayerPlaylist from './useGlobalPlayerPlaylist';
import { random, findIndex } from '../utils';

const mappingNextMode = {
  [modeConstants.LOOP]: modeConstants.REPEAT,
  [modeConstants.REPEAT]: modeConstants.SHUFFLE,
  [modeConstants.SHUFFLE]: modeConstants.LOOP,
};

const makeShuffeSong = songs => songs[random(0, songs.length - 1)];

export default () => {
  const { mode: currentMode, actions: { changeMode } } = useGlobalPlayerMode();
  const { song: currentSong, actions: { changeSong, changeIsPlaying }} = useGlobalPlayerSong();
  const { playlist: currentPlaylist, actions: { changePlaylist }} = useGlobalPlayerPlaylist();

  const isShouldNotAutoChangeSong = useMemo(() => currentMode === modeConstants.REPEAT || !currentPlaylist.songs.length, [currentMode, currentPlaylist.songs]);
  const isShouldNotChangeSong = useMemo(() => !currentPlaylist.songs.length, [currentPlaylist.songs]);

  const goNextMode = useCallback(() => changeMode(mappingNextMode[currentMode]), [currentMode, changeMode]);
  const autoGoNextSong = useCallback(() => {
    if (isShouldNotAutoChangeSong) {
      return;
    }

    if (currentMode === modeConstants.SHUFFLE) {
      return changeSong(makeShuffeSong(currentPlaylist.songs));
    }

    if (currentMode === modeConstants.LOOP) {
      const idxOfCurrentSong = findIndex(currentPlaylist.songs, song => song.id === currentSong.id);
      const maxIdxOfCurrentPlaylistSongs = currentPlaylist.songs.length - 1;
      if (idxOfCurrentSong === maxIdxOfCurrentPlaylistSongs) {
        return changeSong(currentPlaylist.songs[0]);
      }
      
      return changeSong(currentPlaylist.songs[idxOfCurrentSong + 1]);
    }
  }, [currentMode, currentSong, currentPlaylist.songs, isShouldNotAutoChangeSong, changeSong]);

  // Click Next Song Button be like
  const goNextSong = useCallback(() => {
    if (isShouldNotChangeSong) {
      return;
    }

    if (currentMode === modeConstants.SHUFFLE) {
      return changeSong(makeShuffeSong(currentPlaylist.songs));
    }

    if (currentMode === modeConstants.LOOP || currentMode === modeConstants.REPEAT) {
      const idxOfCurrentSong = findIndex(currentPlaylist.songs, song => song.id === currentSong.id);
      const maxIdxOfCurrentPlaylistSongs = currentPlaylist.songs.length - 1;
      if (idxOfCurrentSong === maxIdxOfCurrentPlaylistSongs) {
        return changeSong(currentPlaylist.songs[0]);
      }
      
      return changeSong(currentPlaylist.songs[idxOfCurrentSong + 1]);
    }
  }, [currentMode, currentSong, currentPlaylist.songs, isShouldNotChangeSong, changeSong]);

  // Click Prev Song Button be like
  const goPrevSong = useCallback(() => {
    if (isShouldNotChangeSong) {
      return;
    }

    if (currentMode === modeConstants.SHUFFLE) {
      return changeSong(makeShuffeSong(currentPlaylist.songs));
    }

    if (currentMode === modeConstants.LOOP || currentMode === modeConstants.REPEAT) {
      const idxOfCurrentSong = findIndex(currentPlaylist.songs, song => song.id === currentSong.id);
      const maxIdxOfCurrentPlaylistSongs = currentPlaylist.songs.length - 1;
      if (idxOfCurrentSong === 0) {
        return changeSong(currentPlaylist.songs[maxIdxOfCurrentPlaylistSongs]);
      }
      
      return changeSong(currentPlaylist.songs[idxOfCurrentSong - 1]);
    }
  }, [currentMode, currentPlaylist.songs, currentSong, isShouldNotChangeSong]);

  const playPlaylist = useCallback((playlist) => {
    changePlaylist(playlist);

    if (playlist.songs[0]) {
      changeSong(playlist.songs[0]);
    }
  }, [changePlaylist, changeSong]);

  return useMemo(() => ({
    currentMode,
    currentSong,
    currentPlaylist,
    changeMode,
    changeSong,
    playPlaylist,
    changeIsPlaying,
    changePlaylist,
    goNextMode,
    goNextSong,
    goPrevSong,
    autoGoNextSong,
  }), [
    currentMode,
    currentSong,
    currentPlaylist,
    changeMode,
    changeSong,
    playPlaylist,
    changeIsPlaying,
    changePlaylist,
    goNextMode,
    goNextSong,
    goPrevSong,
    autoGoNextSong,
  ]);
};

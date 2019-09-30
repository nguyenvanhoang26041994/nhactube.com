import { useMemo, useCallback } from 'react';
import { mode as modeConstants } from '../store/constants';
import useGlobalPlayerMode from './useGlobalPlayerMode';
import useGlobalPlayerMusic from './useGlobalPlayerMusic';
import useGlobalPlayerMusics from './useGlobalPlayerMusics';
import { random, findIndex } from '../utils';

const mappingNextMode = {
  [modeConstants.LOOP]: modeConstants.REPEAT,
  [modeConstants.REPEAT]: modeConstants.SHUFFLE,
  [modeConstants.SHUFFLE]: modeConstants.LOOP,
};

const makeShuffeMusic = musics => musics[random(0, musics.length - 1)];

export default () => {
  const { mode: currentMode, actions: { changeMode } } = useGlobalPlayerMode();
  const { music: currentMusic, actions: { changeMusic, changeIsPlaying }} = useGlobalPlayerMusic();
  const { musics: currentMusics, actions: { changeMusics }} = useGlobalPlayerMusics();


  const isShouldNotAutoChangeMusic = useMemo(() => currentMode === modeConstants.REPEAT || !currentMusics.length, [currentMode, currentMusics]);
  const isShouldNotChangeMusic = useMemo(() => !currentMusics.length, [currentMusics]);

  const goNextMode = useCallback(() => changeMode(mappingNextMode[currentMode]), [currentMode, changeMode]);
  const autoGoNextMusic = useCallback(() => {
    if (isShouldNotAutoChangeMusic) {
      return;
    }

    if (currentMode === modeConstants.SHUFFLE) {
      return changeMusic(makeShuffeMusic(currentMusics));
    }

    if (currentMode === modeConstants.LOOP) {
      const idxOfCurrentMusic = findIndex(currentMusics, music => music.id === currentMusic.id);
      const maxIdxOfCurrentMusics = currentMusics.length - 1;
      if (idxOfCurrentMusic === maxIdxOfCurrentMusics) {
        return changeMusic(currentMusics[0]);
      }
      
      return changeMusic(currentMusics[idxOfCurrentMusic + 1]);
    }
  }, [currentMode, currentMusic, currentMusics, isShouldNotAutoChangeMusic, changeMusic]);

  const goNextMusic = useCallback(() => {
    if (isShouldNotChangeMusic) {
      return;
    }

    if (currentMode === modeConstants.SHUFFLE) {
      return changeMusic(makeShuffeMusic(currentMusics));
    }

    if (currentMode === modeConstants.LOOP || currentMode === modeConstants.REPEAT) {
      const idxOfCurrentMusic = findIndex(currentMusics, music => music.id === currentMusic.id);
      const maxIdxOfCurrentMusics = currentMusics.length - 1;
      if (idxOfCurrentMusic === maxIdxOfCurrentMusics) {
        return changeMusic(currentMusics[0]);
      }
      
      return changeMusic(currentMusics[idxOfCurrentMusic + 1]);
    }
  }, [currentMode, currentMusic, currentMusics, isShouldNotChangeMusic, changeMusic]);

  const goPrevMusic = useCallback(() => {
    if (isShouldNotChangeMusic) {
      return;
    }

    if (currentMode === modeConstants.SHUFFLE) {
      return changeMusic(makeShuffeMusic(currentMusics));
    }

    if (currentMode === modeConstants.LOOP || currentMode === modeConstants.REPEAT) {
      const idxOfCurrentMusic = findIndex(currentMusics, music => music.id === currentMusic.id);
      const maxIdxOfCurrentMusics = currentMusics.length - 1;
      if (idxOfCurrentMusic === 0) {
        return changeMusic(currentMusics[maxIdxOfCurrentMusics]);
      }
      
      return changeMusic(currentMusics[idxOfCurrentMusic - 1]);
    }
  }, [currentMode, currentMusics, currentMusic, isShouldNotChangeMusic]);

  return useMemo(() => ({
    currentMode,
    currentMusic,
    currentMusics,
    changeMode,
    changeMusic,
    changeIsPlaying,
    changeMusics,
    goNextMode,
    goNextMusic,
    goPrevMusic,
    autoGoNextMusic,
  }), [
    currentMode,
    currentMusic,
    currentMusics,
    changeMode,
    changeMusic,
    changeIsPlaying,
    changeMusics,
    goNextMode,
    goNextMusic,
    goPrevMusic,
    autoGoNextMusic,
  ]);
};

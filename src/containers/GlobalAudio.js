import React, { useRef, useEffect, useMemo, useCallback } from 'react';
import { useGlobalPlayer } from '../hooks';
import { mode as modeConstants } from '../store/constants';

export const getNode = () => document.getElementById('global-audio');

const GlobalAudio = () => {
  const globalAudio = useMemo(() => getNode(), []);

  const { currentMode, currentMusic, changeIsPlaying, autoGoNextMusic } = useGlobalPlayer();
  const loop = useMemo(() => currentMode === modeConstants.REPEAT, [currentMode]);

  const onEnded = useCallback(() => autoGoNextMusic(), [autoGoNextMusic]);
  const onPlay = useCallback(e => changeIsPlaying(!e.target.paused), [changeIsPlaying]);
  const onPause = useCallback(e => changeIsPlaying(!e.target.paused), [changeIsPlaying]);
  const onWaiting = useCallback(e => changeIsPlaying(!e.target.paused), [changeIsPlaying]);
  const onPlaying = useCallback(e => changeIsPlaying(!e.target.paused), [changeIsPlaying]);

  useEffect(() => {
    globalAudio.addEventListener('play', onPlay);
    globalAudio.addEventListener('pause', onPause);
    globalAudio.addEventListener('waiting', onWaiting);
    globalAudio.addEventListener('playing', onPlaying);
    globalAudio.addEventListener('ended', onEnded);

    return () => {
      globalAudio.removeEventListener('play', onPlay);
      globalAudio.removeEventListener('pause', onPause);
      globalAudio.removeEventListener('waiting', onWaiting);
      globalAudio.removeEventListener('playing', onPlaying);
      globalAudio.removeEventListener('ended', onEnded);
    }
  }, [onPlay, onPause, onWaiting, onWaiting, onPlaying, onEnded, globalAudio]);

  useEffect(() => {
    globalAudio.querySelector('source').src = currentMusic.url;
    if (currentMusic.url) {
      globalAudio.load && globalAudio.load();
      globalAudio.play && globalAudio.play();
    }

    if (!currentMusic.url && !globalAudio.paused) {
      globalAudio.pause();
    }
  }, [currentMusic.url, globalAudio]);

  useEffect(() => {
    globalAudio.loop = loop;
  }, [loop, globalAudio])

  return null;
};

export default GlobalAudio;

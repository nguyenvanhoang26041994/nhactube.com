import React, { useRef, useEffect, useMemo, useCallback } from 'react';
import { useGlobalPlayer } from '../hooks';
import { mode as modeConstants } from '../store/constants';

const GlobalAudio = () => {
  const audioRef = useRef();
  const { currentMode, currentMusic, changeIsPlaying, autoGoNextMusic } = useGlobalPlayer();
  const loop = useMemo(() => currentMode === modeConstants.REPEAT, [currentMode]);

  const onEnded = useCallback(() => autoGoNextMusic(), [autoGoNextMusic]);
  const onPlay = useCallback(e => changeIsPlaying(!e.target.paused), [changeIsPlaying]);
  const onPause = useCallback(e => changeIsPlaying(!e.target.paused), [changeIsPlaying]);
  const onWaiting = useCallback(e => changeIsPlaying(!e.target.paused), [changeIsPlaying]);
  const onPlaying = useCallback(e => changeIsPlaying(!e.target.paused), [changeIsPlaying]);

  useEffect(() => {
    audioRef.current.addEventListener('play', onPlay);
    audioRef.current.addEventListener('pause', onPause);
    audioRef.current.addEventListener('waiting', onWaiting);
    audioRef.current.addEventListener('playing', onPlaying);
    audioRef.current.addEventListener('ended', onEnded);

    return () => {
      audioRef.current.removeEventListener('play', onPlay);
      audioRef.current.removeEventListener('pause', onPause);
      audioRef.current.removeEventListener('waiting', onWaiting);
      audioRef.current.removeEventListener('playing', onPlaying);
      audioRef.current.removeEventListener('ended', onEnded);
    }
  }, [onPlay, onPause, onWaiting, onWaiting, onPlaying, onEnded, audioRef.current]);

  useEffect(() => {
    if (currentMusic.url) {
      audioRef.current.load && audioRef.current.load();
      audioRef.current.play && audioRef.current.play();
    }

    if (!currentMusic.url && !audioRef.current.paused) {
      audioRef.current.pause();
    }
  }, [currentMusic.url]);

  return (
    <audio
      id="music-audio"
      className="hidden"
      ref={audioRef}
      loop={loop}
    >
      <source src={currentMusic.url} />
    </audio>
  );
};

export const getNode = () => document.getElementById('music-audio');

export default GlobalAudio;

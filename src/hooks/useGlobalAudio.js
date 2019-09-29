import { useMemo, useEffect, useCallback, useState } from 'react';
import { getNode } from '../containers/GlobalAudio';
import { calcTime } from '../utils';

export default () => {
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const currentTimeFormat = useMemo(() => calcTime(currentTime), [currentTime]);
  const durationFormat = useMemo(() => calcTime(duration), [duration]);

  const globalAudio = useMemo(() => getNode(), []);
  const onTimeUpdate = useCallback(e => setCurrentTime(e.target.currentTime), [setCurrentTime]);
  const onVolumeChange = useCallback(e => setMuted(e.target.muted), [setMuted]);
  const changeCurrentTime = useCallback(time => { globalAudio.currentTime = time; }, [globalAudio]);

  useEffect(() => {
    globalAudio.addEventListener('timeupdate', onTimeUpdate);
  
    return () => globalAudio.removeEventListener('timeupdate', onTimeUpdate);
  }, [globalAudio, onTimeUpdate]);

  useEffect(() => {
    setDuration(globalAudio.duration);
  }, [globalAudio.duration]);

  useEffect(() => {
    globalAudio.addEventListener('volumechange', onVolumeChange);
    return () => globalAudio.removeEventListener('volumechange', onVolumeChange);
  }, [globalAudio, onVolumeChange]);

  return useMemo(() => ({
    globalAudio,
    muted,
    duration,
    currentTime,
    changeCurrentTime,
    currentTimeFormat,
    durationFormat,
  }), [globalAudio, currentTime, muted, changeCurrentTime, duration, currentTimeFormat, durationFormat]);
};

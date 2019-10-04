import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { globalPlayerMusicSelector } from '../store/selectors';
import { changeIsPlaying, changeMusic, fetchLyrics } from '../store/actions/globalPlayer';

export default () => {
  const music = useSelector(globalPlayerMusicSelector);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ changeIsPlaying, changeMusic, fetchLyrics }, dispatch), [dispatch]);
  const isHasLyrics = useMemo(() => !!music.lyrics.length, [music.lyrics]);

  return useMemo(() => ({
    isHasLyrics,
    music,
    actions,
  }), [music, actions]);
};

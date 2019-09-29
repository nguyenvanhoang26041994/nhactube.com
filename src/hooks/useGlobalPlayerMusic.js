import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { globalPlayerMusicSelector } from '../store/selectors';
import { changeIsPlaying, changeMusic } from '../store/actions/globalPlayer';

export default () => {
  const music = useSelector(globalPlayerMusicSelector);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ changeIsPlaying, changeMusic }, dispatch), [dispatch]);
  const isHasLyrics = useMemo(() => !!music.lyrics.map(lyric => lyric.text).join(), [music]);

  return useMemo(() => ({
    isHasLyrics,
    music,
    actions,
  }), [music, actions, isHasLyrics]);
};

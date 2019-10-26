import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { globalPlayerSongSelector } from '../store/selectors';
import { changeIsPlaying, changeSong } from '../store/actions/globalPlayer';

export default () => {
  const song = useSelector(globalPlayerSongSelector);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ changeIsPlaying, changeSong }, dispatch), [dispatch]);
  const isHasLyric = useMemo(() => !!song.lyric.length, [song.lyric]);

  return useMemo(() => ({
    isHasLyric,
    song,
    actions,
  }), [song, actions]);
};

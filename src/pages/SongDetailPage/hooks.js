import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { songDetail } from './selectors';
import { fetchSong } from './actions';

export const useSongDetail = () => {
  const song = useSelector(songDetail);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ fetchSong }, dispatch), [dispatch]);
  const isHasLyric = useMemo(() => !!song.lyric.length, [song.lyric]);

  return useMemo(() => ({
    isHasLyric,
    song,
    actions,
  }), [song, actions, isHasLyric]);
};

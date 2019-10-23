import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { artistDetail } from './selectors';
import { fetchArtist } from './actions';

export const useArtistDetail = () => {
  const artist = useSelector(artistDetail);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ fetchArtist }, dispatch), [dispatch]);

  return useMemo(() => ({
    artist,
    actions,
  }), [artist, actions]);
};

import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { globalPlayerMusicsSelector } from '../store/selectors';
import { changeMusics, fetchMusics } from '../store/actions/globalPlayer';

export default () => {
  const musics = useSelector(globalPlayerMusicsSelector);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ changeMusics, fetchMusics }, dispatch), [dispatch]);

  return useMemo(() => ({
    musics,
    actions,
  }), [musics, actions]);
};

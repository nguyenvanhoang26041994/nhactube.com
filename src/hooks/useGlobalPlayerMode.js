import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { globalPlayerModeSelector } from '../store/selectors';
import { changeMode } from '../store/actions/globalPlayer';

export default () => {
  const mode = useSelector(globalPlayerModeSelector);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ changeMode }, dispatch), [dispatch]);

  return useMemo(() => ({
    mode,
    actions,
  }), [mode, changeMode]);
};

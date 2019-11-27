import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { listSelector } from './selectors';
import { fetchData } from './actions';

export const useList = () => {
  const list = useSelector(listSelector);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ fetchData }, dispatch), [dispatch]);

  return useMemo(() => ({
    list,
    actions,
  }), [list, actions]);
};

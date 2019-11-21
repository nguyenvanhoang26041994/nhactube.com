import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import TopicCard from '../components/TopicCard';

export default ({ onClick, ...otherProps }) => {
  const history = useHistory();
  const _onClick = useCallback(() => {
    history.push(`/playlist/${otherProps.id}`);
  }, []);

  return (
    <TopicCard
      {...otherProps}
      onClick={_onClick}
    />
  );
};

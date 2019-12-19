import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import TopicCard from '../components/TopicCard';

const TopicCardContainer = ({ onClick, ...otherProps }) => {
  const history = useHistory();
  const _onClick = useCallback(() => {
    history.push(otherProps.link);
  }, []);

  return (
    <TopicCard
      {...otherProps}
      onClick={_onClick}
    />
  );
};

TopicCardContainer.displayName = 'TopicCardContainer';
TopicCardContainer.propTypes = {
  link: PropTypes.string,
  onClick: PropTypes.func,
};
TopicCardContainer.defaultProps = {
  onClick: f => f,
};

export default TopicCardContainer;

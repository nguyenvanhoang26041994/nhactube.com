import React from 'react';
import StandardChart from './StandardChart';

import { useBXHUSUKPlaylist } from './hooks';

const USUKChart = (props) => {
  return (
    <StandardChart {...props} useBXHPlaylist={useBXHUSUKPlaylist} />
  );
};

USUKChart.displayName = 'USUKChart';
USUKChart.propTypes = {};
USUKChart.defaultProps = {};

export default USUKChart;

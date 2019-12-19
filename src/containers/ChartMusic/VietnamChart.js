import React from 'react';
import StandardChart from './StandardChart';

import { useBXHVietnamPlaylist } from './hooks';

const VietnamChart = (props) => {
  return (
    <StandardChart {...props} useBXHPlaylist={useBXHVietnamPlaylist} />
  );
};

VietnamChart.displayName = 'VietnamChart';
VietnamChart.propTypes = {};
VietnamChart.defaultProps = {};

export default VietnamChart;

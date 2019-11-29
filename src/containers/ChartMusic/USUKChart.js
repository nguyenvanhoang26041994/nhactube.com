import React from 'react';
import StandardChart from './StandardChart';

import { useBXHUSUKPlaylist } from './hooks';

const VietnamChart = (props) => {
  return (
    <StandardChart {...props} useBXHPlaylist={useBXHUSUKPlaylist} />
  );
};

export default VietnamChart;

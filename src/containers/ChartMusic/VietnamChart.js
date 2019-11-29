import React from 'react';
import StandardChart from './StandardChart';

import { useBXHVietnamPlaylist } from './hooks';

const VietnamChart = (props) => {
  return (
    <StandardChart {...props} useBXHPlaylist={useBXHVietnamPlaylist} />
  );
};

export default VietnamChart;

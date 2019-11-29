import React, { useMemo, useEffect, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Tabs } from '../../components/core';
import VietnamChart from './VietnamChart';
import USUKChart from './USUKChart';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ChartMusic = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Tabs className="flex-1" defaultActiveTab="bxh_vietnam">
        <Tabs.Tab className="flex flex-1" tab="bxh_usuk" title="ÂU MỸ">
          <USUKChart />
        </Tabs.Tab>
        <Tabs.Tab className="flex flex-1" tab="bxh_vietnam" title="VIỆT NAM">
          <VietnamChart />
        </Tabs.Tab>
      </Tabs>
    </Wrapper>
  )
};

export default ChartMusic;

import React from 'react';
import styled from 'styled-components';
import { Icon, Slider } from '../../components/core';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Volume = ({ className, style, value = 1 }) => {
  return (
    <Wrapper className={className} style={style}>
      <Icon name="volume" size="lg" className="mr-2" />
      <Slider value={value} className="flex-1" />
    </Wrapper>
  )
};

export default Volume;

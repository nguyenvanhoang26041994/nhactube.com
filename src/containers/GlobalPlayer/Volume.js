import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon, Slider } from '../../components/core';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Volume = ({ className, style, value }) => {
  return (
    <Wrapper className={className} style={style}>
      <Icon name="volume" size="lg" className="mr-2" />
      <Slider value={value} className="flex-1" />
    </Wrapper>
  )
};

Volume.displayName = 'Volume';
Volume.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.number,
};
Volume.defaultProps = {
  value: 1,
};

export default Volume;

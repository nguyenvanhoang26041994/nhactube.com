import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../../../components/Icon';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.2);
  height: 2.2em;
  width: 2.2em;
`;

const CircleIconButton = ({ wrapperClassName, ...otherProps }) => {
  return (
    <Wrapper className={wrapperClassName}>
      <Icon {...otherProps} />
    </Wrapper>
  );
};

CircleIconButton.displayName = 'CircleIconButton';
CircleIconButton.propTypes = {
  wrapperClassName: PropTypes.string,
};
CircleIconButton.defaultProps = {};

export default CircleIconButton;

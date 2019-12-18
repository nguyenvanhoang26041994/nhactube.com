import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Icon } from '../../components/core';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.7rem;
  font-size: ${props => props.theme.fontSizes.xl};
  background-color: ${props => props.theme.colors['gray-200']};
`;

const TheTopbar = ({}) => {
  return (
    <Wrapper className="px-3">
      <Icon name="bars" />
      <div>Nhạc Của Tôi</div>
      <div>Nhạc Online</div>
      <Icon name="search" />
    </Wrapper>
  );
};

export default TheTopbar;

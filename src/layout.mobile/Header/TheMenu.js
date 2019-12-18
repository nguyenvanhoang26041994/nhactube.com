import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Icon } from '../../components/core';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuIcon = ({ name, icon, className }) => {
  return (
    <MenuWrapper className={className}>
      <Icon name={icon} size="xl" className="m-1" />
      <span className="__name">{name}</span>
    </MenuWrapper>
  );
}

const TheMenu = ({}) => {
  return (
    <Wrapper className="px-3">
      <MenuIcon icon="home" name="Trang Chủ" className="w-1/5" />
      <MenuIcon icon="chart" name="BXH" className="w-1/5" />
      <MenuIcon icon="list-music" name="Chủ Đề" className="w-1/5" />
      <MenuIcon icon="heart" name="Cho Bạn" className="w-1/5" />
      <MenuIcon icon="bell" name="Thông Báo" className="w-1/5" />
    </Wrapper>
  );
};

export default TheMenu;

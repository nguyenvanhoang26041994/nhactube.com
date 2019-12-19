import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from '../../components/core';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: #fff;
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

TheMenu.displayName = 'TheMenu';
TheMenu.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
};
TheMenu.defaultProps = {};

export default TheMenu;

import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import Button from '../Button';

const RoundedButton = styled(Button)`
  border-radius: 999px;
  padding-left: 1.75em;
  padding-right: 1.75em;

  &.transparent {
    background-color: transparent;
  }
`;

const Wrapper = styled.div``;

const W = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Tabs = ({ className, children }) => {
  return (
    <Wrapper className={className}>
      <W className="mb-5">
        <RoundedButton  className=" transparent">Âu Mỹ</RoundedButton>
        <RoundedButton className="">Việt Nam</RoundedButton>
      </W>
      {children}
    </Wrapper>
  );
};

Tabs.Tab = Tab;

export default Tabs;

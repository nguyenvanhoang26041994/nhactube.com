import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import TheTopbar from './TheTopbar';
import TheMenu from './TheMenu';

const Container = styled.div``
const Wrapper = styled.header``;

const Header = ({}) => {
  return (
    <Container>
      <Wrapper>
        <TheTopbar />
        <TheMenu />
      </Wrapper>
    </Container>
  );
};

export default Header;

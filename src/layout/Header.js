import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  height: 4rem;
`;

const Header = ({ className }) => {
  return (
    <Wrapper className={className}>

    </Wrapper>
  );
};

export default Header;

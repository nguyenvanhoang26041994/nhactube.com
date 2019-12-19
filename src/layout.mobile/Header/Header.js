import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TheTopbar from './TheTopbar';
import TheMenu from './TheMenu';

const Container = styled.div`
  height: 6.7rem;
  z-index: 100;
`;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: inherit;
`;

const Header = ({ className }) => {
  return (
    <Container className={className}>
      <Wrapper>
        <TheTopbar />
        <TheMenu />
      </Wrapper>
    </Container>
  );
};

Layout.displayName = 'Layout';
Layout.propTypes = {
  className: PropTypes.any,
};
Layout.defaultProps = {};


export default Header;

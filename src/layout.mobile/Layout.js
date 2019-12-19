import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import GlobalPlayer from '../containers/GlobalPlayer/GlobalPlayer.mobile';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;


const MainWrapper = styled.main`
  position: relative;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        {children}
      </MainWrapper>
      <GlobalPlayer />
      <Footer />
    </Wrapper>
  );
};

Layout.displayName = 'Layout';
Layout.propTypes = {
  children: PropTypes.any,
};
Layout.defaultProps = {};

export default Layout;

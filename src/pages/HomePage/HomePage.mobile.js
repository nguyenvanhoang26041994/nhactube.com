import React from 'react';
import styled from 'styled-components';

import NewSongs from '../../containers/NewSongs';

const Wrapper = styled.div``;

const HomePage = () => {
  return (
    <Wrapper>
      <NewSongs className="flex-col" />
    </Wrapper>
  );
};

HomePage.displayName = 'HomePage.mobile';
HomePage.propTypes = {};
HomePage.defaultProps = {};

export default HomePage;

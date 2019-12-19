import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import NewSongs from '../../containers/NewSongs';

const Wrapper = styled.div``;

const HomePage = () => {
  return (
    <Wrapper className="container mx-auto">
      <NewSongs />
    </Wrapper>
  );
};

export default HomePage;

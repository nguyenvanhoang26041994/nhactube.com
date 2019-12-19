import React, { useEffect, useState } from 'react';
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

export default HomePage;

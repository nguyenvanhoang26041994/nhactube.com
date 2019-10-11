import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Search = (otherProps) => {
  return (
   <Wrapper {...otherProps}>
      <Input type="search" className="flex-1" />
   </Wrapper>
  );
};

export default Search;

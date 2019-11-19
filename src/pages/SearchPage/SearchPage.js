import React from 'react';
import styled from 'styled-components';
import { useQuery } from '../../hooks';

const Wrapper = styled.div``;

const SearchPage = ({ className }) => {
  const query = useQuery();

  return (
    <Wrapper className={className}>
      KẾT QUẢ TÌM KIẾM
      <p>{query.get('q')}</p>
    </Wrapper>
  );
};

export default SearchPage;

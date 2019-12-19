import React from 'react';
import PropTypes from 'prop-types';
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

SearchPage.displayName = 'SearchPage';
SearchPage.propTypes = {
  className: PropTypes.string,
};
SearchPage.defaultProps = {};

export default SearchPage;

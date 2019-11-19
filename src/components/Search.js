import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Icon from '../components/Icon';
import Button from '../components/Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Search = ({ onSearchClick, ...otherProps }) => {
  const inputRef = useRef();
  const onClick = useCallback(() => {
    onSearchClick(inputRef.current.value);
  }, [onSearchClick, inputRef]);

  return (
   <Wrapper {...otherProps}>
      <Button onClick={onClick} style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
        <Icon name="search" />
      </Button>
      <Input
        ref={inputRef}
        type="search"
        className="flex-1"
        style={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          paddingLeft: 0,
        }}
        placeholder="Nhập tên bài hát hoặc ca sĩ..."
      />
   </Wrapper>
  );
};

export default Search;

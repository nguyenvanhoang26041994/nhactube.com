import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { Image, Icon, Switch } from '../components/core';
import { BlurBackground, Search } from '../components/commons';

const Container = styled.div`
  height: 4rem;
  z-index: 100;
`;

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  z-index: 1;

  a {
    color: inherit;
  }
`;

const SmallWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ListMenuWrapper = styled.ul`
  display: flex;

  > li {
    display: flex;
    align-items: center;
    padding: 0 0.75rem;
  }

  > li:nth-child(1) {
    padding: 0 0.75rem 0 0;
  }

  .__link {
    display: flex;
    align-items: center;
    font-weight: 400;

    &:hover,
    &.--hover,
    &.--active {
      color: ${props => props.theme.colors['yellow-500']};
    }
  }
`;

const Header = (props) => {
  const history = useHistory();
  const onSearchClick = useCallback((text) => {
    history.push(`/search?q=${text}`);
  }, [history]);

  return (
    <Container {...props}>
      <Wrapper>
        <BlurBackground />
        <SmallWrapper className="container mx-auto">
          <ListMenuWrapper>
            <li>
              <Link to="/" className="__link">
                NHẠC ONLINE
              </Link>
            </li>
            <li>
              <Link to="/" className="__link">
                NHẠC CỦA TÔI
              </Link>
            </li>
          </ListMenuWrapper>
          <Search className="pl-3" style={{ width: '15rem', flex: 1 }} onSearchClick={onSearchClick} />
          <Switch className="ml-3" />
        </SmallWrapper>
      </Wrapper>
    </Container>
  );
};

export default Header;

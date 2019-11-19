import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Image, Icon, Button } from '../../components/core';
import SongBar from '../../containers/SongBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const Handler = styled.div``;
const Avatar = styled(Image)``;
const List = styled.ul`
  max-height: 50rem;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; 
  }

  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, rgba(141, 141, 141, 0.35), rgba(141, 141, 141, 0.5), rgba(141, 141, 141, 0.35));
    border-radius: 999px;
  }
`;

const ChartMusic = ({ className, list }) => {
  return (
    <Wrapper className={className}>
      <Handler className="w-1/3">
        <Avatar src="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/1/e/9/5/1e95661a09af33bf404de2a941467f49.jpg" />
        <Button className="my-2">
          <Icon name="play" size="sm" className="mr-2" />
          Phát tất cả
        </Button>
      </Handler>
      <List className="w-2/3 ml-2">
        {list.map((song, idx) => (
          <li key={idx}>
            <SongBar {...song} />
          </li>
        ))}
      </List>
    </Wrapper>
  )
};

export default ChartMusic;

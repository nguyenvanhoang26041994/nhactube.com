import React from 'react';
import styled from 'styled-components';
import { useGlobalPlayer } from '../../../../hooks';

import { Icon } from '../../../../components/core';
import MusicItem from './MusicItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const OtherWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 1rem 1rem 1rem 1rem;
  cursor: pointer;
  /* border-bottom: 1px solid rgba(255, 255, 255,.1); */
  white-space: nowrap;
`;

const List = styled.ul`
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  height:100%;
  /* mask-image: -webkit-linear-gradient(top,hsla(0,0%,100%,0),hsla(0,0%,100%,.6) 15%,#fff 25%,#fff 75%,hsla(0,0%,100%,.6) 85%,hsla(0,0%,100%,0)); */

  /* & li:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.01);
  } */

  &::-webkit-scrollbar {
    width: 3px;
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

const CurrentMusics = ({ className, style }) => {
  const { currentMusics } = useGlobalPlayer();
  return (
    <Wrapper className={className} style={style}>
      <OtherWrapper>
        <Title>
          <Icon name="list-music" className="mr-2" />
          Danh sách phát ({currentMusics.length})
        </Title>
        <List>
          {currentMusics.map((music, idx) => (
            <li key={music.id}>
              <MusicItem {...music} firstText={idx + 1}>{music.name}-{music.channel.name}</MusicItem>
            </li>
          ))}
        </List>
      </OtherWrapper>
    </Wrapper>
  );
};

export default CurrentMusics;

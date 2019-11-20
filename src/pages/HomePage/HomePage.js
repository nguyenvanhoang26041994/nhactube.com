import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlaylistCard from '../../containers/PlaylistCard';
import { SlickSlider } from '../../components/commons';
import ShelfRenderer from './ShelfRenderer';
import ChartMusic from '../../containers/ChartMusic';
import NewSongs from '../../containers/NewSongs';
import PlaylistSuggest from '../../containers/PlaylistSuggest';

const Wrapper = styled.div`
`;

const HomePage = () => {
  return (
    <Wrapper className="container mx-auto flex flex-col flex-wrap">
      <SlickSlider className="mb-3" />
      <ShelfRenderer title="BẢNG XẾP HẠNG" wrapperClassName="mb-5">
        <ChartMusic />
      </ShelfRenderer>
      <ShelfRenderer title="CÓ THỂ BẠN MUỐN NGHE" wrapperClassName="mt-5">
        <PlaylistSuggest />
      </ShelfRenderer>
      <ShelfRenderer title="BÀI HÁT MỚI" wrapperClassName="mt-5">
        <NewSongs />
      </ShelfRenderer>
      <div style={{ height: '5rem' }} />
    </Wrapper>
  );
};

export default HomePage;

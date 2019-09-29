import React, { useEffect, useState, useRef, useMemo } from 'react';
import styled from 'styled-components';
import MusicCard from '../../containers/MusicCard';
import MusicCardSkeleton from '../../components/MusicCard/Skeleton';
import { useGlobalPlayer, useAsyncStatus } from '../../hooks';

const Wrapper = styled.div``;

const HomePage = () => {
  const [newMuiscs, setNewMusics] = useState([]);
  const { changeMusics, changeMusic } = useGlobalPlayer();
  const { status, fetchRequest, fetchSuccess } = useAsyncStatus();

  useEffect(() => {
    fetchRequest();
    fetch('https://www.nhactube.com/api/musics/new')
      .then(res => res.json())
      .then(({ data }) => {
        setNewMusics(data);
        changeMusics(data);
        if (data && data[0]) {
          changeMusic(data[0]);
        }
        fetchSuccess();
      });
  }, []);

  return (
    <Wrapper className="container mx-auto flex flex-wrap">
      {/* {newMuiscs.map((music, idx) => (
        <div style={{ padding: '0.25rem', boxSizing: 'border-box' }} key={idx} className="w-1/4">
          <MusicCard {...music} />
        </div>
      ))} */}
      {status.isLoading && [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((v, idx) => (
        <div style={{ padding: '0.25rem', boxSizing: 'border-box' }} key={idx} className="w-1/4">
          <MusicCardSkeleton />
        </div>
      ))}
    </Wrapper>
  );
};

export default HomePage;

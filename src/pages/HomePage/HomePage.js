import React, { useEffect, useState, useRef, useMemo } from 'react';
import styled from 'styled-components';
import MusicCard from '../../containers/MusicCard';
import MusicCardSkeleton from '../../components/MusicCard/Skeleton';
import { useGlobalPlayer, useAsyncStatus } from '../../hooks';

const Wrapper = styled.div``;

const HomePage = () => {
  const [groupMusics, setGroupMusics] = useState([]);
  const { changeMusic, playMusics } = useGlobalPlayer();
  const { status, fetchRequest, fetchSuccess } = useAsyncStatus();

  useEffect(() => {
    fetchRequest();
    fetch('https://www.nhactube.com/api/group-musics/new')
      .then(res => res.json())
      .then(({ data }) => {
        setGroupMusics(data);
        fetchSuccess();
      });
  }, []);

  return (
    <Wrapper className="container mx-auto flex flex-wrap">
      {groupMusics.map(groupMusic => (
        <div key={groupMusic.id}>
          <button onClick={() => playMusics(groupMusic.id)}>{groupMusic.name}</button>
        </div>
      ))}
      {status.isLoading && [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((v, idx) => (
        <div style={{ padding: '0.25rem', boxSizing: 'border-box' }} key={idx} className="w-1/4">
          <MusicCardSkeleton />
        </div>
      ))}
    </Wrapper>
  );
};

export default HomePage;

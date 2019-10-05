import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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

  return null;
};

export default HomePage;

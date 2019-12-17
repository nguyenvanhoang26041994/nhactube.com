import React from 'react';
import styled from 'styled-components';
import { Song } from '../../components/commons';
import { PopupModal } from '../../components/core';
import { useGlobalPlayerSong } from '../../hooks';

const SongStyled = styled(Song)`
  width: 29rem;
  height: calc(100vh - 5rem);
  max-height: 76rem;
  background-color: ${props => props.theme.colors['gray-200']};
  transform: translate(100%, 0%);
`;

const SongPlayerPopup = ({ children }) => {
  const { song } = useGlobalPlayerSong();
  return (
    <PopupModal
      overlay={(
        <SongStyled song={song} className="standard-box-shadow" />
      )}
    >
      {children}
    </PopupModal>
  );
};

export default SongPlayerPopup;

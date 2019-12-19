import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PlaylistCard from '../../containers/PlaylistCard';
import { usePlaylistSuggest } from './hooks';
import { _take } from '../../utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  width: 100%;
`;

const PlaylistSuggest = ({ className }) => {
  const { playlists, actions } = usePlaylistSuggest();
  useEffect(() => {
    actions.fetchPlaylistSuggest();
  }, []);

  const first5Playlist = useMemo(() => _take(playlists, 5), [playlists]);

  return (
    <Wrapper className={className}>
      <List>
        {first5Playlist.map(playlist => (
          <li key={playlist.id} className="w-1/5 p-2">
            <PlaylistCard {...playlist} />
          </li>
        ))}
      </List>
    </Wrapper>
  )
};

PlaylistSuggest.displayName = 'PlaylistSuggest';
PlaylistSuggest.propTypes = {
  className: PropTypes.string,
};
PlaylistSuggest.defaultProps = {};

export default PlaylistSuggest;

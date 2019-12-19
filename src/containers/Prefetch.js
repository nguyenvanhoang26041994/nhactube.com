import React from 'react';
import { Helmet } from 'react-helmet';

import { useGlobalPlayerPlaylist } from '../hooks';

const Prefetch = () => {
  const { playlist } = useGlobalPlayerPlaylist();

  return (
    <React.Fragment>
      {playlist.songs.map(song => (
        <Helmet key={song.id}>
          <link rel="prefetch" href={song.avatarUrl} as="image" />
          <link rel="prefetch" href={song.url} as="audio" />
        </Helmet>
      ))}
    </React.Fragment>
  );
}

Prefetch.displayName = 'Prefetch';
Prefetch.propTypes = {};
Prefetch.defaultProps = {};

export default Prefetch;

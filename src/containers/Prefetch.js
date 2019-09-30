import React from 'react';
import { Helmet } from 'react-helmet';
import { useGlobalPlayerMusics } from '../hooks';

export default () => {
  const { musics } = useGlobalPlayerMusics();

  return (
    <React.Fragment>
      {musics.map(music => (
        <Helmet key={music.id}>
          <link rel="prefetch" href={music.avatarUrl} as="image" />
          <link rel="prefetch" href={music.url} as="audio" />
        </Helmet>
      ))}
    </React.Fragment>
  );
}

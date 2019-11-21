import React, { useEffect, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TopicCard from '../../containers/TopicCard';

import { useTopicPlaylist } from './hooks';
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

const TopicMusic = ({ className }) => {
  const { playlists, actions } = useTopicPlaylist();

  useEffect(() => {
    actions.fetchTopicMusic();
  }, []);

  const first5Topic = useMemo(() => _take(playlists, 5), [playlists]);
  return (
    <Wrapper className={className}>
      <List>
        {first5Topic.map(playlist => (
          <li key={playlist.id} className="w-1/5 p-2">
            <TopicCard {...playlist} />
          </li>
        ))}
      </List>
    </Wrapper>
  );
};

export default TopicMusic;

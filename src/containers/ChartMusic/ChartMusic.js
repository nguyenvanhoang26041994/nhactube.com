import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Image, Icon, Button } from '../../components/core';
import { calcTime } from '../../utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const Handler = styled.div``;
const Avatar = styled(Image)``;
const List = styled.ul`
  max-height: 50rem;
  height: 100vh;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SongItemWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors['gray-400']};
  cursor: pointer;
  padding: 0.75em;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);

    .__avatar {
      img {
        filter: blur(2px);
        transform: scale(1.2);
      }
    }
  }

  .__avatar {
    height: 3rem;
    width: 3rem;
    border-radius: 0.15em;
  }

  .__name {
    font-weight: 400;
    color: #fff;
  }

  .__name,
  .__duration{
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;

const SongItem = ({ className, avatarUrl, name, artistsName }) => {
  return (
    <SongItemWrapper className={className}>
      <div className="flex flex-1">
        <Image src={avatarUrl} className="__avatar" />
        <div className="flex flex-col ml-1">
          <div className="__name p-1">{name}</div>
          <div className="__artists-name p-1">{artistsName}</div>
        </div>
      </div>
      <div className="w-5 flex justify-end">
        <Icon name="ellipsis-h" />
      </div>
    </SongItemWrapper>
  );
};

const ChartMusic = ({ className, list }) => {
  return (
    <Wrapper className={className}>
      <Handler className="w-1/3">
        <Avatar src="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/1/e/9/5/1e95661a09af33bf404de2a941467f49.jpg" />
        <Button className="my-2">
          <Icon name="play" size="sm" className="mr-2" />
          Phát tất cả
        </Button>
      </Handler>
      <List className="w-2/3 ml-2">
        {list.map((song, idx) => (
          <li key={idx}>
            <SongItem {...song} />
          </li>
        ))}
      </List>
    </Wrapper>
  )
};

export default ChartMusic;

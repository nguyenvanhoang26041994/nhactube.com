import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Image, Icon } from '../components/core';
import storageCaches from '../utils/storageCaches';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  overflow: hidden;
`;

const AvatarImage = styled(Image)`
  width: 16em;
  height: 16em;
  border-radius: 999px;
  margin: 0 auto;
  transition: transform 0.2s cubic-bezier(0.5, 0.5, 1, 1), opacity 0.2s;
`;

const RestInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .__name {
    font-weight: 400;
    color: ${props => props.theme.colors['primary-400']};
  }

  .__artists {
    color: ${props => props.theme.colors['gray-400']};
  }

  .__name,
  .__artists {
    display: flex;
    justify-content: center;
  }
`;

const Disk = styled.div`
  position: relative;
`;

const SongDisk = ({ className, isPlaying, url, artistsName, name, avatarUrl, hiddenInfo }) => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => setRotate(prev => prev + 2), 200);
    }

    return () => clearInterval(timer);
  }, [isPlaying, setRotate]);

  const isDownloaded = useMemo(() => storageCaches[url], [url]);

  return (
    <Wrapper className={className}>
      <Disk>
        <AvatarImage
          src={avatarUrl}
          alt={name}
          style={{ transform: `rotate(${rotate}deg)` }}
        />
      </Disk>
      {!hiddenInfo && (
        <div className="flex flex-col my-5 justify-between">
          <RestInfo>
            <div className="__artists my-1">
              {artistsName}
            </div>
            <div className="__name my-1">
              {isDownloaded && <Icon name="check" className="mr-1" size="xs" />}
              {name}
            </div>
          </RestInfo>
        </div>
      )}
    </Wrapper>
  );
};

SongDisk.displayName = 'SongDisk';
SongDisk.propTypes = {
  className: PropTypes.string,
  isPlaying: PropTypes.bool,
  url: PropTypes.string,
  artistsName: PropTypes.string,
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  hiddenInfo: PropTypes.bool,
};
SongDisk.defaultProps = {};

export default SongDisk;

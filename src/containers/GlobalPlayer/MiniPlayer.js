import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Icon, Image, Slider, Tag } from '../../components/core';
import { CircleIcon } from '../../components/commons';
import { mode as modeConstants } from '../../store/constants';
import { useGlobalPlayer, useGlobalAudio } from '../../hooks';
import { releaseMapper } from '../../utils';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  transition: all 0.5s;
  overflow: hidden;
  color: #fff;
`;

const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InforWrapper = styled.div`
  display: flex;
`;

const AvatarImage = styled(Image)`
  height: 2.5rem;
  width: 4rem;
  transition: all 0.5s;
`;

const SongText = styled.div`
  display: flex;
  align-items: center;
  
  a {
    color: inherit;
  }
`;

const SongTiming = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.sm};

  .__duration {
    color: ${props => props.theme.colors['gray-400']};
  }
`;

const OtherControlWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const iconModes = Object.freeze({
  [modeConstants.REPEAT]: 'repeat-1',
  [modeConstants.LOOP]: 'repeat',
  [modeConstants.SHUFFLE]: 'random',
});

const MiniPlayer = ({ className, onSongListIconClick, miniPlayerRef, isExpanded, style }) => {
  const { globalAudio, duration, currentTime, changeCurrentTime, durationFormat, currentTimeFormat } = useGlobalAudio();
  const { currentSong, currentMode, goPrevSong, goNextSong, goNextMode } = useGlobalPlayer();
  const playOrPauseSong = useCallback(() => {
    if (globalAudio.paused) {
      return globalAudio.play();
    }

    return globalAudio.pause();
  }, [globalAudio]);

  const handleChangeCurrentTime = useCallback(percent => changeCurrentTime(percent * duration), [changeCurrentTime, duration]);

  const iconPlay = useMemo(() => currentSong.isPlaying ? 'pause' : 'play', [currentSong.isPlaying]);
  const iconMode = useMemo(() => iconModes[currentMode], [currentMode]);

  return (
    <Wrapper className={className} ref={miniPlayerRef} style={style}>
      <ControlWrapper className="w-3/12">
        <Icon name="step-backward" onClick={goPrevSong} className="ml-2" />
        <CircleIcon name={iconPlay} color="yellow-500" onClick={playOrPauseSong} />
        <Icon name="step-forward" onClick={goNextSong} />
        <Icon name={iconMode} size="lg" onClick={goNextMode} className="mr-2" />
      </ControlWrapper>
      <InforWrapper className="w-8/12 mx-10">
        {/* <AvatarImage className={cn('mr-3', { 'none-important': isExpanded })} src={currentSong.avatarUrl} alt={currentSong.name} /> */}
        <div className="flex flex-col justify-center grow-1">
          <div className="flex items-center justify-between">
            <SongText>
              <Link to={`/song/${currentSong.id}`} className="flex">
                {currentSong.name}
                {releaseMapper[currentSong.release] && `(${releaseMapper[currentSong.release]})`}
              </Link>
              <span className="mx-1">-</span>
              <div>
                {currentSong.artists.map(artist => (
                  <Link key={artist.id} to={`/artist/${artist.id}`}>
                    {artist.name}
                  </Link>
                ))}
              </div>
            </SongText>
            <SongTiming>
              <span>{currentTimeFormat}</span>
              <span className="mx-1">/</span>
              <span className="__duration">{durationFormat}</span>
            </SongTiming>
          </div>
          <Slider value={currentTime / duration} className="w-full" handleChange={handleChangeCurrentTime} />
        </div>
      </InforWrapper>
      <OtherControlWrapper className="w-1/12">
        <CircleIcon
          transparent={!isExpanded}
          name="list-music"
          className="mx-2"
          color={isExpanded ? 'yellow-500' : null}
          onClick={onSongListIconClick}
        />
      </OtherControlWrapper>
    </Wrapper>
  );
};

export default MiniPlayer;

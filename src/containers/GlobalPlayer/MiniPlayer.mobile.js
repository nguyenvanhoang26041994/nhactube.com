import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Icon, Image } from '../../components/core';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 3rem;
  background-color: ${props => props.theme.colors['gray-200']};
`;

const StyledIcon = styled(Icon)`
  color: ${props => props.theme.colors['primary-400']};
`;

const InforWrapper = styled.div`
  display: flex;

  .__name {
    font-weight: 400;
  }

  .__artists-name {
    color: ${props => props.theme.colors.textWeak};
  }
`;

const Avatar = styled(Image)`
  border-radius: 999px;
  width: 2.2rem;
  height: 2.2rem;
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 3rem);
`;

const ControlWrapper = styled.div`
  display: flex;
`;

const MiniPlayer = ({}) => {
  return (
    <Wrapper className="px-3">
      <InforWrapper className="flex-1">
        <Avatar src="https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com/o/images%2Fsongs%2Fchac-ai-do-se-ve?alt=media" />
        <MainInfo className="ml-2">
          <span className="__name">Chăc Ai Đó Sẽ Về</span>
          <span className="__artists-name">Sơn Tùng M-TP</span>
        </MainInfo>
      </InforWrapper>
      <ControlWrapper className="flex">
        <StyledIcon name="play" size="lg" className="mx-3" />
        <StyledIcon name="step-forward" size="lg" className="mx-3" />
      </ControlWrapper>
    </Wrapper>
  );
};

export default MiniPlayer;

import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import Image from '../Image';

const Wrapper = styled.div`
`;
const SliderMember = styled(Image)``;

const SlickSlider = ({ className }) => {
  return (
    <Wrapper className={className}>
      <SliderMember
        style={{
          height: '18rem',
        }}
        src="https://photo-zmp3.zadn.vn/banner/7/a/6/0/7a60dfcffcc9f274c7a331fc44dd6acb.jpg"
      />
    </Wrapper>
  );
};

export default SlickSlider;

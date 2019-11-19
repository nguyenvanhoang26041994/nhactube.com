import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import Image from '../Image';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
const SliderMember = styled(Image)`
  width: 100%;
`;

const SliderMembers = styled.div`
  display: flex;
  width: ${props => props.fullWidth}px;
  height: 100%;
  transition: 0.5s;
`;

const list = [
  {
    img: 'https://photo-zmp3.zadn.vn/banner/7/a/6/0/7a60dfcffcc9f274c7a331fc44dd6acb.jpg'
  },
  {
    img: 'https://photo-zmp3.zadn.vn/banner/6/0/6/b/606b12de807c6df0379ed0fb67da4b1d.jpg'
  },
  {
    img: 'https://photo-zmp3.zadn.vn/banner/1/2/e/c/12eca092236955ee00273488013297c6.jpg'
  }
];

const SlickSlider = ({ className, style }) => {
  const [w, setWidth] = useState(0);
  const [idx, setIdx] = useState(0);
  const wrapperRef = useRef();

  useEffect(() => {
    setWidth(wrapperRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setIdx(prev => {
      if (prev === list.length - 1) {
        return 0;
      }
      return prev + 1;
    }), 5000);
    return () => clearInterval(timer);
  }, [list.length]);

  return (
    <Wrapper className={className} style={style} ref={wrapperRef}>
      <SliderMembers
        fullWidth={w * list.length}
        style={{
          transform: `translateX(-${idx * w}px)`,
        }}
      >
        {list.map((item, idx) => (
          <SliderMember
            key={idx}
            src={item.img}
          />
        ))}
      </SliderMembers>
    </Wrapper>
  );
};

export default SlickSlider;

import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import SliderMember from './SliderMember';
import MainSliderMember from './MainSliderMember';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SliderMembers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  position: relative;
`;

const FirstSliderMember = styled(SliderMember)`
  z-index: 1;
  width: 80%;
  height: 80%;
  left: 0;
`;
const SecondSliderMember = styled(SliderMember)`
  z-index: 2;
  left: 0;
  width: 60%;
  height: 90%;
  left: 3.5em;
`;

const FourthSliderMember = styled(SliderMember)`
  width: 60%;
  height: 90%;
  z-index: 2;
  right: 3.5em;
`;

const FivethSliderMember = styled(SliderMember)`
  z-index: 1;
  width: 80%;
  height: 80%;
  right: 0;
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
  },
  {
    img: 'https://photo-zmp3.zadn.vn/banner/6/0/6/b/606b12de807c6df0379ed0fb67da4b1d.jpg'
  },
  {
    img: 'https://photo-zmp3.zadn.vn/banner/1/2/e/c/12eca092236955ee00273488013297c6.jpg'
  },
  {
    img: 'https://photo-zmp3.zadn.vn/banner/7/a/6/0/7a60dfcffcc9f274c7a331fc44dd6acb.jpg'
  },
  {
    img: 'https://photo-zmp3.zadn.vn/banner/6/0/6/b/606b12de807c6df0379ed0fb67da4b1d.jpg'
  },
  {
    img: 'https://photo-zmp3.zadn.vn/banner/1/2/e/c/12eca092236955ee00273488013297c6.jpg'
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
      <SliderMembers>
        <FirstSliderMember src={list[2].img} />
        <SecondSliderMember src={list[1].img} />
        <MainSliderMember
          src={list[idx].img}
          index={idx}
          length={list.length}
        />
        <FourthSliderMember src={list[3].img} />
        <FivethSliderMember src={list[4].img} />
      </SliderMembers>
    </Wrapper>
  );
};

export default SlickSlider;

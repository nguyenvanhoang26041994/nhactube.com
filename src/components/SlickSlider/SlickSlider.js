import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
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
  height: calc(100% - 6rem);
  left: 0;
`;
const SecondSliderMember = styled(SliderMember)`
  z-index: 2;
  left: 0;
  width: 60%;
  height: calc(100% - 3rem);
  left: 3em;
`;

const FourthSliderMember = styled(SliderMember)`
  width: 60%;
  height: calc(100% - 3rem);
  z-index: 2;
  right: 3em;
`;

const FivethSliderMember = styled(SliderMember)`
  z-index: 1;
  width: 80%;
  height: calc(100% - 6rem);
  right: 0;
`;

const list = [
  {
    img: 'https://avatar-nct.nixcdn.com/topic/mobile/2018/11/19/c/0/6/c/1542607604573_org.jpg'
  },
  {
    img: 'https://avatar-nct.nixcdn.com/topic/mobile/2018/11/19/c/0/6/c/1542614642169_org.jpg'
  },
  {
    img: 'https://avatar-nct.nixcdn.com/topic/mobile/2018/11/19/c/0/6/c/1542616462691_org.jpg'
  },
  {
    img: 'https://avatar-nct.nixcdn.com/topic/mobile/2018/11/19/c/0/6/c/1542608998169_org.jpg'
  },
  {
    img: 'https://avatar-nct.nixcdn.com/topic/mobile/2018/11/19/c/0/6/c/1542615547976_org.jpg'
  },
  {
    img: 'https://avatar-nct.nixcdn.com/topic/mobile/2019/11/26/0/e/2/0/1574756518914_org.jpg'
  },
  {
    img: 'https://avatar-nct.nixcdn.com/topic/mobile/2018/12/07/d/c/2/a/1544179045624_org.jpg'
  },
  {
    img: 'https://avatar-nct.nixcdn.com/topic/mobile/2018/11/19/c/0/6/c/1542614212933_org.jpg'
  },
  {
    img: 'https://avatar-nct.nixcdn.com/topic/mobile/2018/12/06/9/d/e/b/1544092104047_org.jpg'
  },
  {
    img: 'https://avatar-nct.nixcdn.com/topic/mobile/2018/11/19/c/0/6/c/1542610797625_org.jpg'
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
    }), 10000);
    return () => clearInterval(timer);
  }, [list.length]);

  const firstIdx = useMemo(() => {
    const _idx = idx - 2;
    if (_idx < 0) {
      return list.length + _idx;
    }
    return _idx;
  }, [idx, list.length]);

  const secondIdx = useMemo(() => {
    const _idx = idx - 1;
    if (_idx < 0) {
      return list.length + _idx;
    }
    return _idx;
  }, [idx, list.length]);

  const thirdIdx = useMemo(() => {
    const _idx = idx + 1;
    if (_idx >= list.length) {
      return _idx - list.length;
    }
    return _idx;
  }, [idx, list.length]);

  const fourthIdx = useMemo(() => {
    const _idx = idx + 2;
    if (_idx >= list.length) {
      return _idx - list.length;
    }
    return _idx;
  }, [idx, list.length]);

  const onDotClick = useCallback((idx) => {
    setIdx(idx);
  }, [setIdx]);

  return (
    <Wrapper className={className} style={style} ref={wrapperRef}>
      <SliderMembers>
        <FirstSliderMember className="heavy-box-shadow" src={list[firstIdx].img} onClick={() => setIdx(firstIdx)} />
        <SecondSliderMember className="heavy-box-shadow" src={list[secondIdx].img} onClick={() => setIdx(secondIdx)} />
        <MainSliderMember
          src={list[idx].img}
          index={idx}
          length={list.length}
          onDotClick={onDotClick}
        />
        <FourthSliderMember className="heavy-box-shadow" src={list[thirdIdx].img} onClick={() => setIdx(thirdIdx)} />
        <FivethSliderMember className="heavy-box-shadow" src={list[fourthIdx].img} onClick={() => setIdx(fourthIdx)} />
      </SliderMembers>
    </Wrapper>
  );
};

export default SlickSlider;

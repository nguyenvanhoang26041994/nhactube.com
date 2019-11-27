import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import SliderMember from './SliderMember';
import Dot from './Dot';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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

const Dots = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2em;
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

const getNextIdx = (currentIdx, length, gap) => {
  const nextIdx = currentIdx + gap;
  if (nextIdx >= length) {
    return nextIdx - length;
  }
  return nextIdx;
}

const getPrevIdx = (currentIdx, length, gap) => {
  const prevIdx = currentIdx - gap;

  if (prevIdx < 0) {
    return length + prevIdx;
  }

  return prevIdx;
}

const SlickSlider = ({ className, style }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx(prev => {
      if (prev === list.length - 1) {
        return 0;
      }
      return prev + 1;
    }), 7000);
    return () => clearInterval(timer);
  }, [list.length]);

  const firstIdx = useMemo(() => getPrevIdx(idx, list.length, 2), [idx, list.length]);
  const secondIdx = useMemo(() => getPrevIdx(idx, list.length, 1), [idx, list.length]);
  const fourthIdx = useMemo(() => getNextIdx(idx, list.length, 1), [idx, list.length]);
  const fivethIdx = useMemo(() => getNextIdx(idx, list.length, 2), [idx, list.length]);

  return (
    <Wrapper className={className} style={style}>
      <SliderMembers>
        {list.map((item, i) => (
          <SliderMember
            src={item.img}
            className={cn({
              '--first': firstIdx === i,
              '--second': secondIdx === i,
              '--main heavy-box-shadow': idx === i,
              '--fourth': fourthIdx === i,
              '--fiveth': fivethIdx === i,
            })}
            onClick={() => setIdx(i)}
          />
        ))}
      </SliderMembers>
      <Dots>
        {list.map((item, i) => (
          <Dot key={i} active={i === idx} onClick={() => setIdx(i)} />
        ))}
      </Dots>
    </Wrapper>
  );
};

export default SlickSlider;

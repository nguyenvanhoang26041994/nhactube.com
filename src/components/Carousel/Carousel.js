import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Item from './Item';
import Dot from './Dot';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  position: relative;
`;

const DotsWrapper = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2em;
`;

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

const Carousel = ({ className, style, list, onClick }) => {
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

  const handleClick = useCallback((index, item) => {
    if (index !== idx) {
      return setIdx(index,);
    }

    if (index === idx) {
      return onClick(index, item);
    }
  }, [idx, setIdx, onClick]);

  const firstIdx = useMemo(() => getPrevIdx(idx, list.length, 2), [idx, list.length]);
  const secondIdx = useMemo(() => getPrevIdx(idx, list.length, 1), [idx, list.length]);
  const fourthIdx = useMemo(() => getNextIdx(idx, list.length, 1), [idx, list.length]);
  const fivethIdx = useMemo(() => getNextIdx(idx, list.length, 2), [idx, list.length]);

  return (
    <Wrapper className={className} style={style}>
      <List>
        {list.map((item, i) => (
          <Item
            src={item.avatarUrl}
            className={cn({
              '--first': firstIdx === i,
              '--second': secondIdx === i,
              '--main heavy-box-shadow': idx === i,
              '--fourth': fourthIdx === i,
              '--fiveth': fivethIdx === i,
            })}
            onClick={() => handleClick(i, item)}
          />
        ))}
      </List>
      <DotsWrapper>
        {list.map((item, i) => (
          <Dot key={i} active={i === idx} onClick={() => setIdx(i)} />
        ))}
      </DotsWrapper>
    </Wrapper>
  );
};

Carousel.propTypes = {
  onClick: PropTypes.func,
};
Carousel.defaultProps = {
  onClick: f => f,
};

export default Carousel;

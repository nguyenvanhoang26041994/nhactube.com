import React, { useMemo, useState, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from './Card';

const getNextIdx = (currentIdx, length, gap) => {
  const nextIdx = currentIdx + gap;
  if (nextIdx >= length) {
    return nextIdx - length;
  }
  return nextIdx;
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 21rem;
  height: 19rem;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Album = ({ className, list }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx(prev => {
      if (prev === list.length - 1) {
        return 0;
      }
      return prev + 1;
    }), 5000);
    return () => clearInterval(timer);
  }, [list.length]);

  const firstIdx = useMemo(() => getNextIdx(idx, list.length, 2), [idx, list.length]);
  const secondIdx = useMemo(() => getNextIdx(idx, list.length, 1), [idx, list.length]);

  return (
    <Wrapper className={className}>
      <List>
        {list.map((item, i) => (
          <Card
            className={cn({
              '--first': firstIdx === i,
              '--second': secondIdx === i,
              '--main heavy-box-shadow': idx === i,
            })}
            key={item.id}
            src={item.avatarUrl}
          />
        ))}
      </List>
    </Wrapper>
  );
};

Album.displayName = 'Album';
Album.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
};
Album.defaultProps = {
  list: [],
};

export default Album;

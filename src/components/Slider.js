import React, { useRef, useCallback, useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import { getPageX } from '../utils';

const SliderWrapper = styled.div`
  height: 1.5rem;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
`;

const Rail = styled.div`
  position: absolute;
  width: 100%;
  height: 0.125rem;
  background-color: ${props => props.theme.colors['gray-300']};
  border-radius: 999px;
`;

const Track = styled.div`
  position: absolute;
  height: 0.125rem;
  background-color: ${props => props.theme.colors['yellow-600']};
  border-radius: 999px;
`;

const Handler = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0.75rem;
  height: 0.75rem;
  background-color: #ffffff;
  border-radius: 999px;
  transform: translate(-50%, 0.375rem);
`;

const Slider = ({ className, value, handleChange, ...otherProps }) => {
  const [isDraged, setIsDraged] = useState(false);
  const [localValue, setLocalValue] = useState(0);
  const finishValue = useMemo(() => {
    if (isDraged) {
      return localValue;
    }
    return value;
  }, [value, isDraged, localValue]);
  const sliderRef = useRef();
  const onClick = useCallback(e => handleChange((e.pageX - getPageX(sliderRef.current)) / sliderRef.current.offsetWidth), [sliderRef, handleChange]);

  const onDragStart = useCallback(() => {
    setIsDraged(true);
  }, [setIsDraged]);

  const onDragEnd = useCallback(e => {
    setIsDraged(false);
  }, [setIsDraged]);

  const onDrag = useCallback(e => {
    const value = (e.clientX - getPageX(sliderRef.current)) / sliderRef.current.offsetWidth;
    if (value < 0) {
      return setLocalValue(0);
    }

    if (value > 1) {
      return setLocalValue(1);
    }

    return setLocalValue(value);
  }, [sliderRef, setLocalValue]);

  return (
    <SliderWrapper
      className={className}
      onClick={onClick}
      ref={sliderRef}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onMouseMove={onDrag}
      {...otherProps}
    >
      <Rail />
      <Track style={{ width: `${finishValue * 100}%` }} />
      <Handler style={{ left: `${finishValue * 100}%` }} />
    </SliderWrapper>
  );
};

Slider.displayName = 'Slider';
Slider.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number,
  handleChange: PropTypes.func,
};
Slider.defaultProps = {
  percent: 0,
  handleChange: f => f,
};

export default Slider;

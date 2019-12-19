import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Image = ({ imgRef, className, style, ...otherProps }) => {
  return (
    <Wrapper className={className} style={style}>
      <StyledImg {...otherProps} ref={imgRef} />
    </Wrapper>

  );
};

Image.displayName = 'Image';
Image.propTypes = {
  className: PropTypes.string,
  style: PropTypes,
  imgRef: PropTypes.any,
};
Image.defaultProps = {};

export default Image;

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #fff;
`;
const Title = styled.div`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 600;
`;
const RestWrapper = styled.div``;

const ShelfRenderer = ({ className, children, title, wrapperClassName }) => {
  return (
    <Wrapper className={wrapperClassName}>
      <Title className="mx-1 my-2">{title}</Title>
      <RestWrapper className={className}>
        {children}
      </RestWrapper>
    </Wrapper>
  );
}

export default ShelfRenderer;

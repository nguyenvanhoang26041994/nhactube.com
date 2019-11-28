import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${props => props.theme.colors.text};
`;
const Title = styled.div`
  font-weight: 900;
`;
const RestWrapper = styled.div``;

const ShelfRenderer = ({ className, children, title, wrapperClassName }) => {
  return (
    <Wrapper className={wrapperClassName}>
      <Title className="my-5">{title}</Title>
      <RestWrapper className={className}>
        {children}
      </RestWrapper>
    </Wrapper>
  );
}

export default ShelfRenderer;

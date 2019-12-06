import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${props => props.theme.colors.text};
`;
const ShelfRendererHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 900;
`;

const RenderPropWrapper = styled.div``;

const RestWrapper = styled.div``;

const ShelfRenderer = ({ className, children, title, wrapperClassName }) => {
  return (
    <Wrapper className={wrapperClassName}>
      <ShelfRendererHeader>
        <Title className="my-5">{title}</Title>
        <RenderPropWrapper>

        </RenderPropWrapper>
      </ShelfRendererHeader>
      <RestWrapper className={className}>
        {children}
      </RestWrapper>
    </Wrapper>
  );
}

export default ShelfRenderer;

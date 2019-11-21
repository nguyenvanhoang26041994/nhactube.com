import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const Wrapper = styled.footer`
  color: #fff;
  width: 100%;
`;

const SmallWrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 1rem 0;
`;

const Footer = ({ className, style }) => {
  return (
    <Wrapper className={className} style={style}>
      {/* <SmallWrapper className="container mx-auto">
        <p>Đây là một sản phẩm với mục đích nghiên cứu và giải trí, không thương mại hoá.</p>
        <p>Người phát triển: <a href="https://facebook.com/nvh26041994">Nguyễn Văn Hoàng</a></p>
      </SmallWrapper> */}
    </Wrapper>
  );
};

export default Footer;

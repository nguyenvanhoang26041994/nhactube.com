import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
`;

const Footer = (props) => {
  return (
    <Wrapper {...props}>
      {/* <div className="container mx-auto">
        <p>Đây là một sản phẩm với mục đích nghiên cứu và giải trí, không thương mại hoá.</p>
        <p>Người phát triển: <a href="https://facebook.com/nvh26041994">Nguyễn Văn Hoàng</a></p>
      </div> */}
    </Wrapper>
  );
};

Footer.displayName = 'Footer';
Footer.propType = {};
Footer.defaultProps = {};

export default Footer;

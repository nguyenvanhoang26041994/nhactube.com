import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors['gray-400']};
  cursor: pointer;
  padding: 0.75em;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);

    .__avatar {
      img {
        filter: blur(2px);
        transform: scale(1.2);
      }
    }
  }

  .__avatar {
    height: 3rem;
    width: 3rem;
    border-radius: 0.15em;
  }

  .__name {
    font-weight: 400;
    color: #fff;
  }

  .__name,
  .__duration{
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;
const Item = ({ className, avatarUrl, name, artistsName, duration }) => {
  const durationFormat = useMemo(() => calcTime(+duration), [duration]);
  return (
    <Wrapper className={className}>
      <div className="flex w-10/12">
        <Image src={avatarUrl} className="__avatar" />
        <div className="flex flex-col ml-1">
          <div className="__name p-1">{name}</div>
          <div className="__artists-name p-1">{artistsName}</div>
        </div>
      </div>
      <div className="__duration w-1/12">{durationFormat}</div>
      <div className="w-1/12 flex justify-end">
        <Icon name="ellipsis-h" />
      </div>
    </Wrapper>
  );
};

export default Item;

import React from 'react';
import styled from 'styled-components';
import { Image } from '../../components/core';

const SVG = (props) => (
  <svg {...props} viewBox="0 0 512 511">
    <path d="m500.84375 174.863281c-7.09375-5.980469-16.402344-8.511719-25.546875-6.945312l-36.683594 6.289062c-5.441406.929688-9.097656 6.101563-8.167969 11.542969.933594 5.441406 6.09375 9.097656 11.546876 8.167969l36.683593-6.285157c3.367188-.578124 6.660157.316407 9.273438 2.519532s4.050781 5.296875 4.050781 8.714844v56.199218l-192.136719 32.917969v-60.105469c0-5.570312 3.984375-10.292968 9.476563-11.234375l43.933594-7.527343c5.445312-.933594 9.101562-6.101563 8.167968-11.546876-.933594-5.441406-6.105468-9.097656-11.546875-8.164062l-43.933593 7.527344c-15.121094 2.589844-26.097657 15.605468-26.097657 30.945312v165.144532c-12.792969-13.136719-30.652343-21.316407-50.394531-21.316407-38.816406 0-70.394531 31.582031-70.394531 70.394531 0 38.816407 31.578125 70.398438 70.394531 70.398438s70.394531-31.582031 70.394531-70.398438v-133.824218l192.136719-32.917969v80.015625c-12.796875-13.136719-30.652344-21.316406-50.394531-21.316406-38.820313 0-70.398438 31.582031-70.398438 70.398437 0 38.816407 31.582031 70.394531 70.398438 70.394531 38.015625 0 69.070312-30.296874 70.332031-68.011718.039062-.355469.0625-.714844.0625-1.082032v-206.890624c0-9.273438-4.066406-18.023438-11.15625-24.003907zm-271.375 317.636719c-27.789062 0-50.394531-22.605469-50.394531-50.394531 0-27.789063 22.605469-50.398438 50.394531-50.398438s50.394531 22.609375 50.394531 50.398438c0 27.785156-22.605469 50.394531-50.394531 50.394531zm212.136719-37.648438c-27.789063 0-50.398438-22.605468-50.398438-50.394531 0-27.789062 22.609375-50.398437 50.398438-50.398437 27.785156 0 50.394531 22.609375 50.394531 50.398437 0 27.789063-22.605469 50.394531-50.394531 50.394531zm0 0"/><path d="m143.277344 109.007812c11.410156 3.316407 29.199218 8.972657 46.878906 16.53125 34.792969 14.875 54.746094 31.136719 54.746094 44.617188 0 5.523438 4.476562 10 10 10 5.523437 0 10-4.476562 10-10v-85.410156c0-22.835938-22.503906-44.03125-66.882813-63.003906-30.808593-13.171876-61.09375-20.644532-62.367187-20.957032-2.984375-.7265622-6.136719-.046875-8.550782 1.847656-2.414062 1.898438-3.828124 4.796876-3.828124 7.867188v176.167969c-13.042969-13.582031-31.363282-22.0625-51.636719-22.0625-39.5 0-71.636719 32.136719-71.636719 71.636719s32.136719 71.636718 71.636719 71.636718c39.503906 0 71.640625-32.136718 71.640625-71.636718 0-1.082032-.035156-2.15625-.082032-3.226563.046876-.402344.082032-.808594.082032-1.222656zm-71.640625 178.871094c-28.472657 0-51.636719-23.164062-51.636719-51.636718 0-28.472657 23.164062-51.636719 51.636719-51.636719 28.472656 0 51.640625 23.164062 51.640625 51.636719 0 28.472656-23.167969 51.636718-51.640625 51.636718zm71.640625-264.28125c11.410156 3.320313 29.207031 8.976563 46.878906 16.535156 34.792969 14.871094 54.746094 31.132813 54.746094 44.613282v49.585937c-11.074219-9.484375-26.71875-18.5625-46.882813-27.179687-21.945312-9.382813-43.625-15.875-54.742187-18.941406zm0 0"/><path d="m395.929688 201.660156c2.640624 0 5.210937-1.058594 7.070312-2.929687 1.871094-1.859375 2.929688-4.441407 2.929688-7.070313s-1.058594-5.199218-2.929688-7.070312c-1.859375-1.859375-4.429688-2.929688-7.070312-2.929688-2.628907 0-5.210938 1.070313-7.070313 2.929688s-2.929687 4.441406-2.929687 7.070312 1.070312 5.210938 2.929687 7.070313c1.859375 1.871093 4.441406 2.929687 7.070313 2.929687zm0 0" />
  </svg>
);

const Wrapper = styled.div`
  cursor: pointer;
  /* background-color: rgba(255, 255, 255, 0.05); */
  max-width: 12rem;
  height: 12rem;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.25em;
  user-select: none;
  color: #fff;
`;

const SVGStyled = styled(SVG)`
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 auto;
  fill: rgba(255, 255, 255, 0.7);
`;

const Text = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;
`;

const PlaylistCard = ({ className, name, artistsName, onClick }) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      <SVGStyled />
      <Text className="my-1">{name}</Text>
    </Wrapper>
  );
};

export default PlaylistCard;

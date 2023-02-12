import styled from 'styled-components';

export const WrapMovieDetail = styled.div`
  padding: 10px;
`;

export const BackBtn = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid silver;
  &: active {
    background-color: red;
    border: 2px solid red;
  }
`;

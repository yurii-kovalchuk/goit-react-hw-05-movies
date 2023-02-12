import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapMovieCard = styled.div`
  padding-top: 10px;
`;
export const WrapMainInfo = styled.div`
  display: flex;
  padding-bottom 10px;
  border-bottom: 1px solid grey;
`;

export const WrapMainText = styled.div`
  padding: 20px;
`;

export const WrapAdditionInfo = styled.div`
  border-bottom: 1px solid grey;
`;

export const AdditionalItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  &:hover,
  :focus {
    text-decoration: underline;
  }
  :active {
    color: red;
  }
`;

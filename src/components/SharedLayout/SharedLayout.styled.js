import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 20px 0 20px 50px;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const Link = styled(NavLink)`
  margin-right: 30px;
  color: black;
  text-decoration: none;
  font-size: 20px;
  &.active {
    color: red;
  }
  &:hover,
  :focus {
    text-decoration: underline;
  }
`;

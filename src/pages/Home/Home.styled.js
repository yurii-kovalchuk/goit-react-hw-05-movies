import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding-left: 20px;
`;

export const Headline = styled.h2`
  font-size: 28px;
`;

export const ListItem = styled.li`
  padding-top: 5px;
`;

export const LinkItem = styled(NavLink)`
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

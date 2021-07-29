import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Logo = styled(Link)`
  padding: 15px;
  background-color: red;
`;

export const NavItem = styled(NavLink)`
  color: aqua;
  padding: 15px;

  &.active {
    background-color: fuchsia;
    color: lime;
  }
`;

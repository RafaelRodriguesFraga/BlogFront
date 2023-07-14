import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.header`

`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1``;

export const NavListContainer = styled.div``;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 60px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.15rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  border-radius: 10px;
  height: 1.75rem;

  ::placeholder {
    padding-left: 10px;
  }
 
`;

export const HamburgerIconContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

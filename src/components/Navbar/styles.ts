import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
  z-index: 999;


`;

export const LogoLink = styled(Link)`
  font-size: 2rem;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;

export const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media sceen and (max-width: 768px) {
    position: absolute;
    top: 4.5rem;
    flex-direction column;
    width: 100%;
    height: 100vh;
    background-color: rgba(55,65,81,1);
    transition: all 0.3s ease-in;

    &.active {
        left: 0;
    }
  }
`;

export const NavbarItem = styled.li`
  margin-left: 1rem;

  @media sceen and (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const NavbarLink = styled(Link)`
    color: #FFF;
    text-decoration none;
  `;

export const SearchInput = styled.input`
  border-radius: 16px;
  padding: 0.5rem 1rem;
  border: none;
  background: rgba(31, 41, 55, 0.6);

  ::placeholder {
    color: #fff;
  }
`;

export const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 1rem;
`;

export const HamburgerButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (min-width: 250px) {
    display: block;
  }
`;

export const HamburgerIcon = styled(FaBars)`
  width: 32px;
  height: 32px;
`;

export const CloseIcon = styled(FaTimes)`
  width: 32px;
  height: 32px;
`;

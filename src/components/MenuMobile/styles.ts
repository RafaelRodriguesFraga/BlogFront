import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

type ContainerProps = {
  visible: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background: #6b7a8c;
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: 0.5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);

      > svg {
        transform: rotate(0deg);
        cursor: pointer;
      }
    `}
`;

export const Navbar = styled.nav``;

export const NavListContainer = styled.div``;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 2rem;
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.15rem;
`;

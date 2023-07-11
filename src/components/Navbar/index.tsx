import React, { useState } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { FaBars, FaHamburger } from "react-icons/fa";

type NavbarProps = {
  setVisible: (visible: boolean) => void
}

const Navbar = ({setVisible}: NavbarProps) => {
  
  return (
    <S.NavbarContainer>
      <S.Navbar>
        <S.LogoContainer>
          <S.Logo>Logo</S.Logo>
        </S.LogoContainer>

          <S.NavList>
            <S.NavItem>
              <S.NavLink to="/">Back-End</S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink to="/">Front-End</S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink to="/">Mobile</S.NavLink>
            </S.NavItem>
          </S.NavList>

        <S.SearchContainer>
          <S.SearchInput type="search" placeholder="Pesquisar..."/>
        </S.SearchContainer>

        <S.HamburgerIconContainer >
          <FaBars size={26} onClick={() => setVisible(true)}/>
        </S.HamburgerIconContainer>
      </S.Navbar>
    </S.NavbarContainer>
  );
};

export default Navbar;

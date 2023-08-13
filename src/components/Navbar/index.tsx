import React, { KeyboardEventHandler, useState } from "react";
import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaHamburger } from "react-icons/fa";
import { searchByTitleAsync } from "../../services/post.service";
import Post from "../../interfaces/Post";
import SearchResult from "../../pages/SearchResult";
import SearchForm from "../SearchForm";

type NavbarProps = {
  setVisible: (visible: boolean) => void;
};

const Navbar = ({ setVisible }: NavbarProps) => {
  return (
    <S.NavbarContainer>
      <S.Navbar>
        <S.NavList>
          <S.NavItem>
            <S.NavLink to="/posts/backend">Back-End</S.NavLink>
          </S.NavItem>

          <S.NavItem>
            <S.NavLink to="/posts/frontend">Front-End</S.NavLink>
          </S.NavItem>

          <S.NavItem>
            <S.NavLink to="/posts/mobile">Mobile</S.NavLink>
          </S.NavItem>
        </S.NavList>

        <S.HamburgerIconContainer>
          <FaBars size={26} onClick={() => setVisible(true)} />
        </S.HamburgerIconContainer>
      </S.Navbar>
    </S.NavbarContainer>
  );
};

export default Navbar;

import React, { useState } from "react";
import * as S from  "./styles.ts";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <S.NavbarContainer>
      <S.LogoLink to="/">My Blog</S.LogoLink>

      <S.HamburgerButton onClick={toggleMenu}>
        {menuActive ? <S.CloseIcon /> : <S.HamburgerIcon/>  }
      </S.HamburgerButton>

      <S.NavbarList>
        <S.NavbarItem>
            <S.NavbarLink to="/">Back-End</S.NavbarLink>
        </S.NavbarItem>
        <S.NavbarItem>
            <S.NavbarLink to="/">Front-End</S.NavbarLink>
        </S.NavbarItem>
        <S.NavbarItem>
            <S.NavbarLink to="/">Mobile</S.NavbarLink>
        </S.NavbarItem>
        </S.NavbarList>

        <S.SearchInput type="text" placeholder="Search"/>
        <S.AvatarImage src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" alt="Avatar" />     

    </S.NavbarContainer>
  );
};

export default Navbar;

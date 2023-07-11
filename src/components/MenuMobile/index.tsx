import { FaTimes } from "react-icons/fa";
import * as S from "./styles";
import { useEffect } from "react";

type MenuMobileProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const MenuMobile = ({ visible, setVisible }: MenuMobileProps) => {
  useEffect(() => {
    document.body.style.overflowY = visible ? "hidden" : "auto";
  }, [visible]);

  return (
    <S.Container visible={visible}>
      <FaTimes size={30} onClick={() => setVisible(false)} />
      <S.Navbar>
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
      </S.Navbar>
    </S.Container>
  );
};

export default MenuMobile;

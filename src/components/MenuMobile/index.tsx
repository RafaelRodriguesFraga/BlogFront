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
            <S.NavLink to="/posts/backend" onClick={() => setVisible(false)}>Back-End</S.NavLink>
          </S.NavItem>

          <S.NavItem>
            <S.NavLink to="/posts/frontend" onClick={() => setVisible(false)}>Front-End</S.NavLink>
          </S.NavItem>

          <S.NavItem>
            <S.NavLink to="/posts/mobile" onClick={() => setVisible(false)}>Mobile</S.NavLink>
          </S.NavItem>
        </S.NavList>
      </S.Navbar>
    </S.Container>
  );
};

export default MenuMobile;

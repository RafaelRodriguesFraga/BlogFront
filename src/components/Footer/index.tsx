import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.FooterContainer>
      <p>Copyright (c) 2023 - Rafael Rodrigues Fraga</p>
      <S.SocialIconsContainer>
        <S.SocialIconLink to="#">
          <FaFacebook  size={22}/>
        </S.SocialIconLink>
        <S.SocialIconLink to="#">
          <FaTwitter size={22} />
        </S.SocialIconLink>
        <S.SocialIconLink to="#">
          <FaInstagram size={22} />
        </S.SocialIconLink>
      </S.SocialIconsContainer>
    </S.FooterContainer>
  );
};

export default Footer;

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FootTextContainer>
        <S.FooterText>Copyright (c) 2023</S.FooterText>       
        <S.Dash>-</S.Dash>
        <S.FooterText>Rafael Rodrigues Fraga</S.FooterText>
      </S.FootTextContainer>
      <S.SocialIconsContainer>
        <S.SocialIconLink to="#">
          <FaFacebook />
        </S.SocialIconLink>
        <S.SocialIconLink to="#">
          <FaTwitter />
        </S.SocialIconLink>
        <S.SocialIconLink to="#">
          <FaInstagram  />
        </S.SocialIconLink>
      </S.SocialIconsContainer>
    </S.FooterContainer>
  );
};

export default Footer;

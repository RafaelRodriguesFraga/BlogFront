import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
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
        <S.SocialIconLink href="https://www.linkedin.com/in/rafael-fraga-b53a9890/" target="_blank">
          <FaLinkedin />
        </S.SocialIconLink>
        <S.SocialIconLink href="https://github.com/RafaelRodriguesFraga" target="_blank">
          <FaGithub />
        </S.SocialIconLink>     
      </S.SocialIconsContainer>
    </S.FooterContainer>
  );
};

export default Footer;

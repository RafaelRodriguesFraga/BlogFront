import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;

  margin-top: 5rem;  

  color: #fff;
`;

export const FooterText = styled.p``;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 20px;
`;

export const SocialIconLink = styled(Link)`
    color: #FFF;
`;

export const FacebookIcon = styled(FaFacebook)``;
export const LinkedinIcon = styled(FaLinkedin)``;
export const GithubIcon = styled(FaGithub)``;
export const InstagramIcon = styled(FaInstagram)``;

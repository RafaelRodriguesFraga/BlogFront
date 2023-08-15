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

export const FootTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  @media (max-width: 355px) {
    flex-direction: column;
  }
`

export const FooterText = styled.span`
  text-align: center;
   letter-spacing: 1px;

  @media (max-width: 352px) {
    font-size: 1rem;
  }
`;

export const Dash = styled.span`
 letter-spacing: 1px;
  @media (max-width: 355px) {
    display: none;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 20px;
  font-size: 22px;

  @media (max-width: 355px) {
    font-size: 20px;
  }
`;

export const SocialIconLink = styled.a`
    color: #FFF;
    transition: all 0.4s ease-in-out;
  

  &:hover {
    transform: translateY(-4px);
  }
`;


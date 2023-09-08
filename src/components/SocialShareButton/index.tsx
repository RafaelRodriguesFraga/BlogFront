import React, { ReactNode } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import * as S from "./styles";
import { IconType } from "react-icons/lib";

type SocialShareButtonProps = {
  url: string;
};

type SocialShareProvider = {
  shareUrl: string;
  display: JSX.Element;
};

const isMobileOrTablet = () => {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
};

const socialShareMap: Record<string, SocialShareProvider> = {
  facebook: {
    shareUrl: "https://www.facebook.com/sharer/sharer.php?u=",
    display: <FaFacebook size={30} />,
  },
  twitter: {
    shareUrl: "https://twitter.com/intent/tweet?url=",
    display: <FaTwitter size={30} />,
  },
  linkedin: {
    shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url=",
    display: <FaLinkedin size={30} />,
  },
  whatsapp: {
    shareUrl: `https://${isMobileOrTablet() ? "api": "web"}.whatsapp.com/send?text=`,
    display: <FaWhatsapp size={30} />,
  },
};

const SocialShareButton = ({ url }: SocialShareButtonProps) => {
  return (
    <S.SocialIconsContainer>
      <S.List>
        {Object.entries(socialShareMap).map(([key, socialShareProvider]) => (
          <S.ListItem key={key}>
            <S.SocialIconLink
              href={`${socialShareProvider.shareUrl}${encodeURIComponent(url)}`}
              target="_blank"
            >
              {socialShareProvider.display}
            </S.SocialIconLink>
          </S.ListItem>
        ))}
      </S.List>
    </S.SocialIconsContainer>
  );
};

export default SocialShareButton;

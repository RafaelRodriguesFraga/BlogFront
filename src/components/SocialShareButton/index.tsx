import React, { ReactNode } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import * as S from "./styles";
import { IconType } from "react-icons/lib";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";

type SocialShareButtonProps = {
  url: string;
  title: string;
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

const SocialShareButton = ({ url, title }: SocialShareButtonProps) => {
  return (
    <S.SocialIconsContainer>
      <S.FacebookShare url={url} quote={title}>
          <FaFacebook size={30}/>
      </S.FacebookShare>

      <S.TwitterShare url={url} title={title}>
          <FaTwitter size={30}/>
      </S.TwitterShare>

      <S.LinkedinShare url={url} title={title}>
          <FaLinkedin size={30}/>
      </S.LinkedinShare>

      <S.WhatsAppShare url={url} title={title}>
          <FaWhatsapp size={30}/>
      </S.WhatsAppShare>
      {/* <S.List>
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
      </S.List> */}
    </S.SocialIconsContainer>
  );
};

export default SocialShareButton;

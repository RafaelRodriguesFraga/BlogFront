import React, { ReactNode } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import * as S from "./styles";
import { Helmet } from "react-helmet";

type SocialShareButtonProps = {
  url: string;
  title: string;
  thumbnail: string;
};

// type SocialShareProvider = {
//   shareUrl: string;
//   display: JSX.Element;
// };

// const isMobileOrTablet = () => {
//   return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
// };

// const socialShareMap: Record<string, SocialShareProvider> = {
//   facebook: {
//     shareUrl: "https://www.facebook.com/sharer/sharer.php?u=",
//     display: <FaFacebook size={30} />,
//   },
//   twitter: {
//     shareUrl: "https://twitter.com/intent/tweet?url=",
//     display: <FaTwitter size={30} />,
//   },
//   linkedin: {
//     shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url=",
//     display: <FaLinkedin size={30} />,
//   },
//   whatsapp: {
//     shareUrl: `https://${isMobileOrTablet() ? "api": "web"}.whatsapp.com/send?text=`,
//     display: <FaWhatsapp size={30} />,
//   },
// };

const SocialShareButton = ({
  url,
  title,
  thumbnail,
}: SocialShareButtonProps) => {
  return (
    <S.SocialIconsContainer>
      <Helmet>
        <meta name="description" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:image" content={thumbnail} />
        <meta property="og:url" content={url} />
      </Helmet>

      <S.FacebookShare
        url={url}
        quote={title}
        title={title}
        windowWidth={800}
        windowHeight={600}
      >
        <FaFacebook size={30} />
      </S.FacebookShare>

      <S.TwitterShare
        url={url}
        title={title}
        windowWidth={800}
        windowHeight={600}
      >
        <FaTwitter size={30} />
      </S.TwitterShare>

      <S.LinkedinShare
        url={url}
        title={title}
        windowWidth={800}
        windowHeight={600}
      >
        <FaLinkedin size={30} />
      </S.LinkedinShare>

      <S.WhatsAppShare
        url={url}
        title={title}
        windowWidth={800}
        windowHeight={600}
      >
        <FaWhatsapp size={30} />
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

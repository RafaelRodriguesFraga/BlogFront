import React, { ReactNode } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import * as S from "./styles";
import { Helmet } from "react-helmet";

type SocialShareButtonProps = {
  url: string;
  title: string;
  thumbnail: string;
};

const SocialShareButton = ({
  url,
  title,
  thumbnail,
}: SocialShareButtonProps) => {
  return (
    <S.SocialIconsContainer>
      <Helmet>
        <meta property="og:description" content={title} />
        <meta property="og:image" content={thumbnail} />
        <meta property="og:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={title} />
        <meta name="twitter:image" content={thumbnail} />
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
    </S.SocialIconsContainer>
  );
};

export default SocialShareButton;

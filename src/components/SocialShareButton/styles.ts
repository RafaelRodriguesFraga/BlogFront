import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import styled from "styled-components";

export const SocialIconsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 1rem;
`;

export const FacebookShare = styled(FacebookShareButton)`
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const TwitterShare = styled(TwitterShareButton)`
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const LinkedinShare = styled(LinkedinShareButton)`
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const WhatsAppShare = styled(WhatsappShareButton)`
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
`;

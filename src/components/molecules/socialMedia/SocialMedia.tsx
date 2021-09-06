import { FC } from "react";
import StyledSocialMedia from "./SocialMedia.style";
import Typography from "../../atoms/typography/Typography";
import cs from "classnames";

interface SocialMediaInterface {
  socialTab?: { icoName: string; href: string }[];
  presentationCase?: boolean;
}

const SocialMedia: FC<SocialMediaInterface> = ({
  socialTab,
  presentationCase,
}) => {
  return (
    <StyledSocialMedia className={cs({ PC: presentationCase })}>
      {socialTab?.map((item, index) => (
        <Typography key={index} {...item} textTag="a" />
      ))}
    </StyledSocialMedia>
  );
};

export default SocialMedia;

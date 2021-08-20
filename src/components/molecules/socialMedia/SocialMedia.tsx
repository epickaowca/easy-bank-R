import { FC } from "react";
import StyledSocialMedia, { SCMInterface } from "./SocialMedia.style";
import Typography from "../../atoms/typography/Typography";

interface SocialMediaInterface extends SCMInterface {
  socialTab?: { icoName: string; href: string }[];
}

const SocialMedia: FC<SocialMediaInterface> = ({
  socialTab,
  presentationCase,
}) => {
  return (
    <StyledSocialMedia presentationCase={presentationCase}>
      {socialTab?.map(({ icoName, href }, index) => (
        <Typography key={index} icoName={icoName} href={href} textTag="a" />
      ))}
    </StyledSocialMedia>
  );
};

export default SocialMedia;

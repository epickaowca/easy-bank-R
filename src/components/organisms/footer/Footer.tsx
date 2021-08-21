import { FC } from "react";
import StyledFooter, { LeftSide, RightSide } from "./Footer.style";
import Typography from "../../atoms/typography/Typography";
import SocialMedia from "../../molecules/socialMedia/SocialMedia";
import Navigation from "../../molecules/navigation/Navigation";
import Button from "../../atoms/button/Button";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";

const navItems = [
  { content: "About Us", href: "#" },
  { content: "Contact", href: "#" },
  { content: "Blog", href: "#" },
  { content: "Careers", href: "#" },
  { content: "Support", href: "#" },
  { content: "Privacy Policy", href: "#" },
];

const socialTab = [
  { icoName: "icon-facebook.svg", href: "#" },
  { icoName: "icon-instagram.svg", href: "#" },
  { icoName: "icon-twitter.svg", href: "#" },
  { icoName: "icon-youtube.svg", href: "#" },
  { icoName: "icon-pinterest.svg", href: "#" },
];

const Footer: FC = () => {
  return (
    <StyledFooter>
      <div>
        <LeftSide>
          <div>
            <LogoSvg />
            <SocialMedia socialTab={socialTab} />
          </div>
          <Navigation navItems={navItems} footerCase />
        </LeftSide>
        <RightSide>
          <Button content="Request Invite" />
          <Typography content="© Easybank. All Rights Reserved" textTag="p" />
        </RightSide>
      </div>
    </StyledFooter>
  );
};

export default Footer;

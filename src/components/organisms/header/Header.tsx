import { FC, useState } from "react";
import StyledHeader, { ShadowDiv } from "./Header.style";
import Navigation from "../../molecules/navigation/Navigation";
import Typography from "../../atoms/typography/Typography";
import Button from "../../atoms/button/Button";
import Logo from "../../atoms/logo/Logo";

const navItems = [
  { content: "Home", href: "#" },
  { content: "About", href: "#" },
  { content: "Contact", href: "#" },
  { content: "Blog", href: "#" },
  { content: "Careers", href: "#" },
];

const Header: FC = () => {
  const [hideNav, setHideNav] = useState(true);

  const toggleNav = () => {
    setHideNav((prev) => !prev);
  };

  return (
    <StyledHeader hideNav={hideNav}>
      <div>
        <Logo />
        <Navigation navItems={navItems} onClick={toggleNav} />
        <Button content="Request Invite" />
        <Typography
          icoName="icon-hamburger.svg"
          textTag="button"
          onClick={toggleNav}
        />
        <ShadowDiv onClick={toggleNav}></ShadowDiv>
      </div>
    </StyledHeader>
  );
};

export default Header;

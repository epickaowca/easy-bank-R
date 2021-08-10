import { FC, useState } from "react";
import StyledHeader from "./Header.style";
import Navigation from "../../molecules/navigation/Navigation";
import Typography from "../../atoms/typography/Typography";
import Button from "../../atoms/button/Button";

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
        <Typography icoName="logo.svg" textTag="a" href="#" />
        <Navigation navItems={navItems} onClick={toggleNav} />
        <Button content="Request Invite" />
        <Typography
          icoName="icon-hamburger.svg"
          textTag="button"
          onClick={toggleNav}
        />
      </div>
    </StyledHeader>
  );
};

export default Header;

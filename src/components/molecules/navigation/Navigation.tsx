import { FC } from "react";
import StyledNav, { StyledNavInterface } from "./Navigation.style";
import Typography from "../../atoms/typography/Typography";

interface NavInterface extends StyledNavInterface {
  navItems: { content: string; href: string }[];
}

const Navigation: FC<NavInterface> = ({ navItems, footerCase }) => {
  return (
    <StyledNav footerCase={footerCase}>
      <ul>
        {navItems.map(({ href, content }, index) => (
          <li key={index}>
            <Typography textTag="a" href={href} content={content} />
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Navigation;

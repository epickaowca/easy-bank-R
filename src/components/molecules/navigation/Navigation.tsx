import { FC } from "react";
import StyledNav from "./Navigation.style";
import Typography from "../../atoms/typography/Typography";

interface NavInterface {
  navItems: { content: string; href: string }[];
}

const Navigation: FC<NavInterface> = ({ navItems }) => {
  return (
    <StyledNav>
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

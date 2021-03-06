import { FC } from "react";
import StyledNav, { StyledNavInterface } from "./Navigation.style";
import Typography from "../../atoms/typography/Typography";
import cs from "classnames";

export interface NavInterface extends StyledNavInterface {
  navItems: { content: string; href: string }[];
  onClick?: () => void;
}

const Navigation: FC<NavInterface> = ({ navItems, footerCase, onClick }) => {
  return (
    <StyledNav className={cs({ FC: footerCase, HC: !footerCase })}>
      <ul>
        {navItems.map((elem, index) => (
          <li key={index}>
            <Typography {...elem} textTag="a" onClick={onClick} />
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Navigation;

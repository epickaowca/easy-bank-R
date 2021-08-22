import { FC } from "react";
import StyledLogo, { SLInterface } from "./Logo.style";

const Logo: FC<SLInterface> = ({ whiteCase }) => {
  return <StyledLogo whiteCase={whiteCase} />;
};

export default Logo;

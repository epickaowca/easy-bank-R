import styled from "styled-components";
import { ReactComponent as LogoIco } from "../../assets/logo.svg";

export interface SLInterface {
  whiteCase?: boolean;
}

const StyledLogo = styled(LogoIco)<SLInterface>`
  width: 8.68rem;
  height: 1.25rem;
  & > g {
    & > path {
      fill: ${(p) => (p.whiteCase ? "white" : "#2D314D")};
    }
  }
`;

export default StyledLogo;

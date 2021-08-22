import styled from "styled-components";
import StyledButton from "../../atoms/button/Button.style";

interface styledInterface {
  hideNav: boolean;
}

const StyledHeader = styled.header<styledInterface>`
  position: relative;
  z-index: 17;
  margin: auto;
  max-width: 1920px;
  background: white;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > button {
      &:nth-child(3) {
        display: none;
      }
    }
    & > nav {
      visibility: ${(p) => (p.hideNav ? "hidden" : "visible")};
    }
  }
  ${(p) => p.theme.media.tablet} {
    & > div {
      & > nav {
        visibility: visible !important;
      }

      & > button {
        &:nth-child(3) {
          display: block;
        }
        &:nth-child(4) {
          display: none;
        }
      }
    }
  }
`;

export default StyledHeader;

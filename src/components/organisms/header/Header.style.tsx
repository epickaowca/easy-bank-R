import styled from "styled-components";

interface styledInterface {
  hideNav: boolean;
}

const StyledHeader = styled.header<styledInterface>`
  --visibility-v: ${(p) => (p.hideNav ? "hidden" : "visible")};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 25px;
  z-index: 17;
  background: white;
  width: 100%;
  position: relative;
  & > div {
    margin: auto;
    max-width: 1920px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > button {
      &:nth-child(3) {
        display: none;
      }
    }
    & > nav {
      z-index: 7;
      visibility: var(--visibility-v);
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

export const ShadowDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  visibility: var(--visibility-v);
  z-index: 5;
  cursor: pointer;
  ${(p) => p.theme.media.tablet} {
    visibility: hidden !important;
  }
`;

export default StyledHeader;

import styled from "styled-components";

const StyledHeroSection = styled.section`
  background: ${(p) => p.theme.colors.primary};
`;

export const Picture = styled.div`
  position: relative;
  & > img {
    z-index: 2;
    position: relative;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
`;

export const BgImg = styled.div<{ bgMobile: string; bgDesktop: string }>`
  top: 0px;
  background-image: url(${(p) => p.bgMobile});
  background-size: cover;
  width: 100vw;
  height: 500px;
  position: absolute;
  ${(p) => p.theme.media.tablet} {
    background-image: url(${(p) => p.bgDesktop});
  }
  z-index: 1;
`;

export default StyledHeroSection;

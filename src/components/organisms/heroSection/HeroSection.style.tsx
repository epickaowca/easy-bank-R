import styled from "styled-components";

const StyledHeroSection = styled.section`
  background: ${(p) => p.theme.colors.primary};
`;

export const Picture = styled.div`
  position: relative;
  height: 450px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    transform: translateY(-90px);
    width: 500px;
    z-index: 2;
    position: relative;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: auto;
  text-align: center;
  gap: 25px;
`;

export const BgImg = styled.div<{ bgMobile: string; bgDesktop: string }>`
  width: 100%;
  height: 400px;
  max-width: 425px;
  top: 0px;
  right: 0;
  background-image: url(${(p) => p.bgMobile});
  background-size: cover;
  position: absolute;
  ${(p) => p.theme.media.tablet} {
    background-image: url(${(p) => p.bgDesktop});
  }
  z-index: 1;
`;

export default StyledHeroSection;

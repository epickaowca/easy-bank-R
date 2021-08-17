import styled from "styled-components";

const StyledHeroSection = styled.section`
  background: ${(p) => p.theme.colors.primary};
  padding-bottom: 50px;
  ${(p) => p.theme.media.tablet} {
    & > div {
      max-width: 1920px;
      margin: auto;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
    }
  }
  ${(p) => p.theme.media.desktop1000} {
    padding: 50px 0;
  }
  ${(p) => p.theme.media.desktop} {
    padding: 7 0px 0;
  }
`;

export const Picture = styled.div`
  position: relative;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    transform: translateY(-90px);
    width: 500px;
    z-index: 2;
    position: relative;
  }
  ${(p) => p.theme.media.tablet} {
    width: 50%;
    height: 500px;
    & > img {
      position: absolute;
      right: 0;
      transform: translate(150px, -120px);
      top: 0px;
    }
  }
  ${(p) => p.theme.media.desktop1000} {
    & > img {
      width: 550px;
      transform: translate(70px, -100px);
    }
  }
  ${(p) => p.theme.media.desktop} {
    & > img {
      width: 620px;
      transform: translate(0px, -100px);
    }
  }
  ${(p) => p.theme.media.desktop1600} {
    & > img {
      width: 670px;
      transform: translate(0px, -130px);
    }
  }
`;
export const BgImg = styled.div<{ bgMobile: string; bgDesktop: string }>`
  width: 100%;
  height: 400px;
  top: 0px;
  left: 50%;
  background-image: url(${(p) => p.bgMobile});
  background-size: cover;
  background-position: center;
  position: absolute;
  transform: translateX(-50%);
  z-index: 1;
  ${(p) => p.theme.media.tablet} {
    background-image: url(${(p) => p.bgDesktop});
    left: unset;
    right: 0;
    width: 700px;
    height: auto;
    aspect-ratio: 7 / 5;
    max-width: unset;
    background-position: center;
    transform: translate(250px, -150px);
  }
  ${(p) => p.theme.media.desktop1000} {
    width: 750px;
    transform: translate(170px, -150px);
  }
  ${(p) => p.theme.media.desktop} {
    width: 900px;
  }
  ${(p) => p.theme.media.desktop1600} {
    width: 950px;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  gap: 25px;
  margin-top: 40px;
  ${(p) => p.theme.media.tablet} {
    text-align: left;
    align-items: flex-start;
  }
  ${(p) => p.theme.media.desktop1000} {
    gap: 35px;
    max-width: 370px;
    & > h1 {
      font-size: 2.2rem;
    }
  }
  ${(p) => p.theme.media.desktop1600} {
    max-width: 500px;
    & > h1 {
      max-width: 450px;
    }
  }
`;

export default StyledHeroSection;

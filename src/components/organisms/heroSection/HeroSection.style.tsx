import styled, { css } from "styled-components";

const StyledHeroSection = styled.section(
  ({
    theme: {
      media: { tablet, desktop1000, desktop, desktop1600 },
      colors: { primary },
    },
  }) => `
  padding-top: 70px;
  background: ${primary};
  padding-bottom: 80px;
  ${tablet} {
    padding-top: 92px;
    & > div {
      position: relative;
      max-width: 1920px;
      margin: auto;
    }
  }
  ${desktop1000} {
    padding-bottom: 50px;
  }
  ${desktop} {
    padding-top: 95px;
    padding-bottom: 70px;
  }
  ${desktop1600}{
    padding-top: 100px;
  }
`
);

const positionStyle = css`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Picture = styled.div(
  ({
    theme: {
      media: { tablet },
    },
  }) => `
  position: relative;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${tablet} {${positionStyle}}
`
);

export const StyledImg = styled.img(
  ({
    theme: {
      media: { tablet, desktop1000, desktop, desktop1600 },
    },
  }) => `
  transform: translateY(-90px);
  width: 500px;
  z-index: 2;
  position: relative;
  ${tablet} {
    ${positionStyle}
    transform: translate(150px, -120px);
  }
  ${desktop1000} {
    width: 550px;
    transform: translate(70px, -100px);
  }
  ${desktop} {
    width: 620px;
    transform: translate(0px, -100px);
  }
  ${desktop1600} {
    width: 670px;
  }
`
);

export const BgImg = styled.div<{ bgMobile: string; bgDesktop: string }>(
  ({
    bgDesktop,
    bgMobile,
    theme: {
      media: { tablet, desktop1000, desktop, desktop1600 },
    },
  }) => `
  width: 100%;
  height: 400px;
  top: 0px;
  right: 50%;
  background-image: url(${bgMobile});
  background-size: cover;
  background-position: center;
  position: absolute;
  transform: translateX(50%);
  z-index: 1;
  ${tablet} {
    background-image: url(${bgDesktop});
    right: 0;
    width: 700px;
    height: auto;
    aspect-ratio: 7 / 5;
    max-width: unset;
    transform: translate(250px, -150px);
  }
  ${desktop1000} {
    width: 750px;
    transform: translate(170px, -150px);
  }
  ${desktop} {
    width: 900px;
  }
  ${desktop1600} {
    width: 950px;
  }
`
);

export const Article = styled.article(
  ({
    theme: {
      media: { tablet, desktop1000, desktop1600, desktop1900 },
    },
  }) => `
  margin-top: 40px;
  margin: 0 auto;
  & > div {
    margin: auto;
    text-align: center;
    max-width: 300px;
    gap: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ${tablet} {
    width: 100%;
    max-width: 1480px;
    padding: 120px 50px;
    & > div {
      margin: 0px;
      text-align: left;
      align-items: flex-start;
    }
  }
  ${desktop1000} {
    & > div {
      gap: 35px;
      max-width: 370px;
      & > h1 {
        font-size: 2.2rem;
      }
    }
  }
  ${desktop1600} {
    max-width: 1570px;
    & > div {
      max-width: 500px;
      & > h1 {
        max-width: 450px;
      }
    }
  }
  ${desktop1900} {
    max-width: 1600px;
    padding: 120px 10px;
  }
`
);

export default StyledHeroSection;

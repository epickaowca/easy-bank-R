import styled from "styled-components";

const StyledMainSection = styled.section`
  background-color: ${(p) => p.theme.colors.primary};
  & > div {
    padding: 45px 10px;
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
  ${(p) => p.theme.media.tablet} {
    & > div {
      padding: 70px 10px;
      max-width: 900px;
      margin: auto;
    }
  }
  ${(p) => p.theme.media.desktop} {
    & > div {
      padding: 100px 10px;
      max-width: 1450px;
    }
  }
  ${(p) => p.theme.media.desktop1900} {
    & > div {
      padding: 120px 10px;
      max-width: 1700px;
    }
  }
`;

export default StyledMainSection;

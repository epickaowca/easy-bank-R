import styled from "styled-components";

const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  ${(p) => p.theme.media.tablet} {
    gap: 70px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 900px;
    & > article {
      width: 40%;
    }
  }
  ${(p) => p.theme.media.desktop} {
    flex-wrap: nowrap;
    max-width: 1450px;
    & > article {
      width: auto;
      max-width: 270px;
    }
  }
  ${(p) => p.theme.media.desktop1900} {
    max-width: 1700px;
  }
  & > article {
    max-width: 360px;
  }
`;

export default StyledPostContainer;

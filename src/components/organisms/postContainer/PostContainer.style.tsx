import styled from "styled-components";

const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  ${(p) => p.theme.media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    & > article {
      width: 40%;
    }
  }
  ${(p) => p.theme.media.desktop} {
    flex-wrap: nowrap;
    & > article {
      width: auto;
      max-width: 270px;
    }
  }
  ${(p) => p.theme.media.desktop1900} {
  }
  & > article {
    max-width: 360px;
  }
`;

export default StyledPostContainer;

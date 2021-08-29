import styled from "styled-components";

const StyledPostContainer = styled.div(
  ({
    theme: {
      media: { tablet, desktop, desktop1900 },
    },
  }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  ${tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    & > article {
      width: 40%;
    }
  }
  ${desktop} {
    flex-wrap: nowrap;
    & > article {
      width: auto;
      max-width: 270px;
    }
  }
  ${desktop1900} {
  }
  & > article {
    max-width: 360px;
  }
`
);

export default StyledPostContainer;

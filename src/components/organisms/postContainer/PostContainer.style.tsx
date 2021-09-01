import styled from "styled-components";

const StyledPostContainer = styled.div(
  ({
    theme: {
      media: { tablet, desktop1300, desktop1600 },
    },
  }) => `
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  ${tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 70px 20px;
  }
  ${desktop1300} {
    gap: 25px
    & > article {
      width: auto;
    }
  }
  ${desktop1600}{
    justify-content: space-between;
  }
`
);

export default StyledPostContainer;

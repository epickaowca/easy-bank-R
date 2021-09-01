import styled from "styled-components";

export interface SMSInterface {
  postsCase?: boolean;
}

const StyledMainSection = styled.section<SMSInterface>(
  ({
    postsCase,
    theme: {
      colors: { primary, secondary },
      media: { tablet, tablet850, desktop1600, desktop1900 },
    },
  }) => `
  background-color: ${postsCase ? primary : secondary};
  & > div {
    padding: 80px 10px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    ${tablet}{
      gap: 70px;
      margin: auto;
      padding: 80px 5px;
      padding-left: 50px;
      max-width: 1480px;
    }
    ${tablet850}{
      padding: 80px 50px;
    }
    ${desktop1600}{
      max-width: 1570px;
    }
    ${desktop1900}{
      padding: 120px 10px;
      max-width: 1600px;
    }
  }
`
);

export default StyledMainSection;

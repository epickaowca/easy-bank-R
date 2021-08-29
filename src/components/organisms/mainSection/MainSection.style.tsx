import styled from "styled-components";

export interface SMSInterface {
  postsCase?: boolean;
}

const StyledMainSection = styled.section<SMSInterface>(
  ({
    postsCase,
    theme: {
      colors: { primary, secondary },
      media: { tablet, desktop, desktop1900 },
    },
  }) => `
  background-color: ${postsCase ? primary : secondary};
  & > div {
    padding: 45px 10px;
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
  ${tablet} {
    & > div {
      padding: 70px 10px;
      max-width: 900px;
      margin: auto;
    }
  }
  ${desktop} {
    & > div {
      padding: 100px 10px;
      max-width: 1450px;
    }
  }
  ${desktop1900} {
    & > div {
      padding: 120px 10px;
      max-width: 1700px;
    }
  }
`
);

export default StyledMainSection;

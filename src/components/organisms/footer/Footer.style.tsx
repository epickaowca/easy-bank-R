import styled, { css } from "styled-components";
import StyledP from "../../atoms/typography/Typography.style";

const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFooter = styled.footer(
  ({
    theme: {
      media: { desktop1000, desktop1600 },
      colors: { headingText },
    },
  }) => `
  background: ${headingText};
  & > div {
    ${flexColumn};
    gap: 25px;
    padding: 50px 5px;
    text-align: center;
  }
  ${desktop1000} {
    & > div {
      padding: 60px 40px;
      padding-top: 100px;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  ${desktop1600} {
    & > div {
      padding-top: 120px;
      padding-bottom: 70px;
      max-width: 1600px;
      margin: auto;
    }
  }
`
);

export const LeftSide = styled.div(
  ({
    theme: {
      media: { tablet, desktop1000, desktop1600 },
    },
  }) => `
  ${flexColumn};
  gap: 25px;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
  ${tablet} {
    align-items: unset;
  }
  ${desktop1000} {
    gap: 90px;
    flex-direction: row;
    & > div {
      align-items: flex-start;
    }
  }
  ${desktop1600} {
    gap: 150px;
  }
`
);

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  & > ${StyledP} {
    color: white;
  }
  ${(p) => p.theme.media.desktop1000} {
    align-items: flex-end;
  }
`;

export default StyledFooter;

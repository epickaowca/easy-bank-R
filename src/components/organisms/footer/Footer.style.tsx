import styled from "styled-components";
import StyledP from "../../atoms/typography/Typography.style";

const StyledFooter = styled.footer`
  background: ${(p) => p.theme.colors.headingText};
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 50px 5px;
    text-align: center;
  }
  ${(p) => p.theme.media.desktop1000} {
    & > div {
      padding: 70px 40px;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  ${(p) => p.theme.media.desktop1600} {
    & > div {
      max-width: 1600px;
      margin: auto;
    }
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    & > svg {
      width: 8.68rem;
      height: 1.25rem;
      & > g {
        & > path {
          fill: white;
        }
      }
    }
  }
  ${(p) => p.theme.media.tablet} {
    align-items: unset;
  }
  ${(p) => p.theme.media.desktop1000} {
    gap: 90px;
    flex-direction: row;
    & > div {
      align-items: flex-start;
    }
  }
  ${(p) => p.theme.media.desktop1600} {
    gap: 150px;
  }
`;
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

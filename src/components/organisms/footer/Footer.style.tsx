import styled from "styled-components";
import StyledP from "../../atoms/typography/Typography.style";

const StyledFooter = styled.footer`
  & > div {
    background: ${(p) => p.theme.colors.headingText};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 50px 5px;
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
`;
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  & > ${StyledP} {
    color: white;
  }
`;

export default StyledFooter;

import styled, { css } from "styled-components";

export interface StyledNavInterface {
  footerCase?: boolean;
}

const footerStylesTablet = css`
  & > ul {
    height: 120px;
    flex-wrap: wrap;
    gap: 20px 45px;
    align-content: start;
    & > li {
      flex-grow: 0;
    }
  }
`;

const footerStyles = css`
  & > ul {
    & > li {
      & > a {
        color: white;
      }
    }
  }
`;

const headerStyles = css`
  padding: 25px 0px;
  width: 90%;
  transform: translateX(-50%);
  top: 100px;
  left: 50%;
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  position: absolute;
  background: white;
`;

const headerStylesTablet = css`
  all: unset;
  position: relative;
  & > ul {
    flex-direction: row;
  }
`;

const StyledNav = styled.nav<StyledNavInterface>(
  ({
    footerCase,
    theme: {
      media: { tablet, desktop, desktop1600 },
    },
  }) => `
  & > ul {
    display: flex;
    gap: 25px;
    flex-direction: column;
    text-align: center;
    & > li{
      &:hover{
        opacity: .7;
      }
    }
    ${desktop} {
      gap: 45px;
    }
    ${desktop1600} {
      gap: ${footerCase ? "50px" : "70px"};
    }
  }
  ${footerCase ? footerStyles : headerStyles}
  ${tablet} {
    ${footerCase ? footerStylesTablet : headerStylesTablet}
  }
`
);

export default StyledNav;

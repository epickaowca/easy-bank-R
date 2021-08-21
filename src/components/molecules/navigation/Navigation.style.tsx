import styled, { css } from "styled-components";

export interface StyledNavInterface {
  footerCase?: boolean;
}

const styles = {
  footerCaseStyles: `& > ul{
    & > li{
      & > a{
        color: white;
      }
    }
  }`,
  footerCaseStylesTablet: `
      & > ul{
        height: 120px;
        flex-wrap: wrap;
        gap: 20px 45px;
        align-content: start;
        & > li {
          flex-grow: 0;
        }
      }
    }
  `,
  headerCase: `
    padding: 15px 0px;
    width: 90%;
    transform: translateX(-50%);
    top: 100px;
    left: 50%;
    border-radius: 5px;
    background: white;
    position: absolute;
    box-shadow: 0px 0px 15px rgba(0,0,0,.2);
    `,
  headerCaseTablet: `
    padding: unset;
    width: unset;
    transform: unset;
    top: unset;
    left: unset;
    border-radius: unset;
    box-shadow: unset;
  position: relative;
    & > ul {
      flex-direction: row;
    }
  }
  `,
};

const choosedStyles = (tablet: string, footerCase: boolean | undefined) => {
  const {
    headerCase,
    footerCaseStyles,
    footerCaseStylesTablet,
    headerCaseTablet,
  } = styles;
  return `
    ${footerCase ? footerCaseStyles : headerCase};
    ${tablet}{
      ${footerCase ? footerCaseStylesTablet : headerCaseTablet}
    }
  `;
};

const StyledNav = styled.nav<StyledNavInterface>(
  ({
    footerCase,
    theme: {
      media: { tablet, desktop1600, desktop },
    },
  }) => `
  & > ul{
    display: flex;
    gap: 15px;
    flex-direction: column;
    text-align: center;
    ${desktop}{
      gap: 45px;
    }
    ${desktop1600}{
      gap: 50px;
    }
  }
}
${choosedStyles(tablet, footerCase)}
`
);

export default StyledNav;

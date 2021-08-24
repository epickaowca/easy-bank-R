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
    padding: 25px 0px;
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
      media: { tablet, desktop1600, desktop, desktop1000 },
    },
  }) => `
  & > ul{
    display: flex;
    gap: ${footerCase ? "15px" : "25px"};
    flex-direction: column;
    text-align: center;
    ${desktop1000}{
      gap: ${footerCase ? "15px" : "25px"};
    }
    ${desktop}{
      gap: ${footerCase ? "45px" : "55px"};
    }
    ${desktop1600}{
      gap: ${footerCase ? "50px" : "70px"};
    }
  }
}
${choosedStyles(tablet, footerCase)}
`
);

export default StyledNav;

import styled, { css } from "styled-components";

export interface StyledNavInterface {
  footerCase?: boolean;
}

const styles = {
  footerCaseStyles: `
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
    `,
  headerCaseTablet: `
  padding: unset;
  width: unset;
  transform: unset;
  top: unset;
  left: unset;
  border-radius: unset;
  position: relative
    & > ul {
      flex-direction: row;
    }
  }
  `,
};

const choosedStyles = (tablet: string, footerCase: boolean | undefined) => {
  const { headerCase, footerCaseStyles, headerCaseTablet } = styles;
  return `
    ${!footerCase && headerCase};
    ${tablet}{
      ${footerCase ? footerCaseStyles : headerCaseTablet}
    }
  `;
};

const StyledNav = styled.nav<StyledNavInterface>(
  ({
    footerCase,
    theme: {
      media: { tablet },
    },
  }) => `
  & > ul{
    display: flex;
    gap: 15px;
    flex-direction: column;
    text-align: center;
  }
}
${choosedStyles(tablet, footerCase)}
`
);

export default StyledNav;

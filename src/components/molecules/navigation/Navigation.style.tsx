import styled from "styled-components";

export interface StyledNavInterface {
  footerCase?: boolean;
}

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

  &.FC{
    & > ul {
      & > li {
        & > a {
          color: white;
        }
      }
    }
    ${tablet}{
      & > ul {
        height: 120px;
        flex-wrap: wrap;
        gap: 20px 45px;
        align-content: start;
        & > li {
          flex-grow: 0;
        }
      }
    }
  }

  &.HC{
    padding: 25px 0px;
    width: 90%;
    transform: translateX(-50%);
    top: 100px;
    left: 50%;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    position: absolute;
    background: white;
    ${tablet}{
      all: unset;
      position: relative;
      & > ul {
        flex-direction: row;
      }
    }
  }
`
);

export default StyledNav;

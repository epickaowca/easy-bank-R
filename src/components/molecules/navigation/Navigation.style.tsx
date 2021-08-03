import styled from "styled-components";

const StyledNav = styled.nav`
  color: black;
  background: white;
  width: 90%;
  border-radius: 5px;
  padding: 15px 0px;
    & > ul{
      display: flex;
      gap: 15px;
      flex-direction: column;
      text-align: center;
    }
  }
  ${(p) => p.theme.media.tablet}{
    width: auto;
    padding: 0px;
    & > ul{
      flex-direction: row;
    }
  }
`;

export default StyledNav;

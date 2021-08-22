import styled from "styled-components";

const StyledHeading = styled.article`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 500px;
  text-align: center;
  ${(p) => p.theme.media.tablet} {
    margin: unset;
    text-align: left;
  }
`;

export default StyledHeading;

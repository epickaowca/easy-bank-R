import styled from "styled-components";

const StyledHeading = styled.article`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 500px;
  text-align: center;
  ${(p) => p.theme.media.tablet} {
    text-align: left;
  }
`;

export default StyledHeading;

import styled from "styled-components";

export interface SCMInterface {
  presentationCase?: boolean;
}

const StyledSocialMedia = styled.div<SCMInterface>`
  display: flex;
  align-items: center;
  gap: 10px 25px;
  flex-wrap: wrap;
  ${(p) =>
    p.presentationCase &&
    `
  background-color: rgba(0,0,0,.7);
  padding: 10px;
  `};
`;

export default StyledSocialMedia;

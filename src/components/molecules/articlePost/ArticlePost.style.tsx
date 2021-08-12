import styled from "styled-components";

export interface SAPInterface {
  author?: string;
}

const StyledArticlePost = styled.article<SAPInterface>`
  &,
  & > div {
    display: flex;
    flex-direction: column;
  }
  gap: ${(p) => (p.author ? "0px" : "25px")};
  align-items: center;
  text-align: center;
  max-width: 325px;

  & > div {
    gap: 15px;
  }
  & > img {
    max-width: 100%;
  }
  ${(p) => p.theme.media.tablet} {
    text-align: left;
    align-items: flex-start;
  }
  ${(p) =>
    p.author &&
    `
    cursor: pointer;
    &:hover{
      opacity: .7;
    }
    & > div{
        padding: 25px 10px;
        background: white;
        gap: 25px;
      }  
  `}
`;

export default StyledArticlePost;

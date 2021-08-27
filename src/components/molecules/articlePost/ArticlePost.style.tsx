import styled from "styled-components";

export interface SAPInterface {
  author?: string;
}

const StyledArticlePost = styled.article<SAPInterface>`
  display: flex;
  flex-direction: column;
  gap: ${(p) => (p.author ? "0px" : "25px")};
  align-items: center;
  text-align: center;
  max-width: 450px;
  ${(p) =>
    p.author &&
    `
    cursor: pointer;
    &:hover{
      opacity: .7;
    }
  `}
  & > img {
    max-width: 100%;
  }
  ${(p) => p.theme.media.tablet} {
    text-align: left;
    align-items: flex-start;
    max-width: 370px;
    height: inherit;
  }
`;

export const ContentDiv = styled.div<SAPInterface>`
  --fontS: 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  & > p {
    font-size: var(--fontS);
  }
  & > h3 {
    font-size: var(--fontS + 3px);
  }
  ${(p) =>
    p.author &&
    `
  padding: 25px 20px;
  background: white;
  gap: 25px;
  `}
  ${(p) => p.theme.media.desktop1900} {
    ${(p) => (p.author ? "--fontS: 20px;" : "padding: 40px 30px;")}
  }
`;

export default StyledArticlePost;

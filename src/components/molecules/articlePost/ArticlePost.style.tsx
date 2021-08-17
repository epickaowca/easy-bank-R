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
  max-width: 450px;

  & > div {
    gap: 15px;
    & > p {
      font-size: 16px;
    }
    & > h3 {
      font-size: 19px;
    }
  }
  & > img {
    max-width: 100%;
  }
  ${(p) =>
    p.author &&
    `
    cursor: pointer;
    &:hover{
      opacity: .7;
    }
    & > div{
        padding: 25px 20px;
        background: white;
        gap: 25px;
      }  
  `}

  ${(p) => p.theme.media.tablet} {
    text-align: left;
    align-items: flex-start;
    max-width: 370px;
    height: inherit;
  }
  ${(p) => p.theme.media.desktop1900} {
    & > div {
      ${(p) =>
        p.author
          ? `padding: 40px 30px;`
          : `
        & > p {
          font-size: 20px;
        }
        & > h3 {
          font-size: 23px;
        }
      `}
    }
  }
`;

export default StyledArticlePost;

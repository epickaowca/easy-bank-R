import styled from "styled-components";

export interface SAPInterface {
  author?: string;
}

const StyledArticlePost = styled.article<SAPInterface>(
  ({
    author,
    theme: {
      media: { tablet },
    },
  }) => `
  display: flex;
  flex-direction: column;
  gap: ${author ? "0px" : "25px"};
  align-items: center;
  text-align: center;
  max-width: 450px;
  
  &.authorCS{
    cursor: pointer;
    &:hover{
      opacity: .7
    };
    & > div{
      padding: 25px 20px; 
      background: white; 
      gap: 25px;
    }
  }

  & > img {
    max-width: 100%;
  }
  ${tablet} {
    text-align: left;
    align-items: flex-start;
    max-width: 370px;
    height: inherit;
  }
`
);

export const ContentDiv = styled.div<SAPInterface>(
  ({
    author,
    theme: {
      media: { desktop1900 },
    },
  }) => `
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
  ${desktop1900} {
    ${author ? "--fontS: 20px;" : "padding: 40px 30px;"}
  }
`
);

export default StyledArticlePost;

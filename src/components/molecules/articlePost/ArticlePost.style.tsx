import styled from "styled-components";

export interface SAPInterface {
  author?: string;
}

const borderRadiusFunc = (side: "top" | "bottom") => {
  return `border-${side}-left-radius: 7px; border-${side}-right-radius: 7px;`;
};

export const Img = styled.div<{ imgSrc: string; author?: string }>`
  width: ${(p) => (p.author ? "100%;" : "72px;")}
    ${(p) =>
      p.author
        ? `padding-top: 66.67% !important; ${borderRadiusFunc("top")}`
        : "height: 72px;"};
  background-image: url(${(p) => p.imgSrc}) !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
`;

const StyledArticlePost = styled.article<SAPInterface>(
  ({
    author,
    theme: {
      media: { tablet, desktop1600 },
    },
  }) => `
  display: flex;
  flex-direction: column;
  gap: ${author ? "0px" : "25px"};
  align-items: center;
  text-align: center;
  max-width: 370px;
  
  &.authorCS{
    cursor: pointer;
    &:hover{
      opacity: .7
    };
    & > div{
      padding: 25px 20px; 
      background: white;
      gap: 25px;
      box-shadow: 0px 0px 15px rgba(0,0,0,.1);
    }
  }

  ${tablet} {
    text-align: left;
    align-items: flex-start;
    width: 330px;
    height: inherit;
  }
  ${desktop1600}{
    width: 340px;
  }
`
);

export const ContentDiv = styled.div<SAPInterface>(
  ({
    author,
    theme: {
      media: { desktop1900, tablet },
    },
  }) => `
  --fontS: 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  ${author && borderRadiusFunc("bottom")};
  & > p {
    font-size: var(--fontS);
  }
  & > h3 {
    font-size: calc(var(--fontS) + 3px);
  };
  ${tablet}{
    & > p{
      &:nth-child(3){
        height: 72px;
      }
    }
  }
  ${desktop1900} {
    ${!author ? "--fontS: 18px;" : "padding: 40px 30px;"}
  }
`
);

export default StyledArticlePost;

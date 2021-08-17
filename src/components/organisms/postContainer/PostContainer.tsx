import { FC } from "react";
import ArticlePost from "../../molecules/articlePost/ArticlePost";
import StyledPostContainer from "./PostContainer.style";
import data from "./PostContainer.json";

interface resInterface {
  imgName: string;
  h3Content: string;
  pContent: string;
  author?: string;
}

const PostContainer: FC<{ postCase?: boolean }> = ({ postCase }) => {
  const res: resInterface[] = postCase ? data.tabH2 : data.tabH;
  return (
    <StyledPostContainer>
      {res.map(({ imgName, h3Content, pContent, author }) => (
        <ArticlePost
          imgName={imgName}
          h3Content={h3Content}
          pContent={pContent}
          author={author}
        />
      ))}
    </StyledPostContainer>
  );
};

export default PostContainer;

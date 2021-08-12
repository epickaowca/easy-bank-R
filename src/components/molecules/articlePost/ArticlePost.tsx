import { FC } from "react";
import Typography from "../../atoms/typography/Typography";
import StyledArticlePost, { SAPInterface } from "./ArticlePost.style";
import { getImg } from "../../particles/utilities";

interface APInterface extends SAPInterface {
  imgName: string;
  h3Content: string;
  pContent: string;
}

const ArticlePost: FC<APInterface> = ({
  imgName,
  h3Content,
  pContent,
  author,
}) => {
  const imgH = getImg(imgName);
  return (
    <StyledArticlePost author={author}>
      <img src={imgH} alt="Image" />
      <div>
        {author && <Typography content={author} textTag="p" />}
        <Typography
          content={h3Content}
          textTag="h3"
          lightCase={author ? true : false}
        />
        <Typography content={pContent} textTag="p" />
      </div>
    </StyledArticlePost>
  );
};

export default ArticlePost;

import { FC } from "react";
import Typography from "../../atoms/typography/Typography";
import StyledArticlePost, {
  SAPInterface,
  ContentDiv,
  Img,
} from "./ArticlePost.style";
import { getImg } from "../../particles/utilities";
import cs from "classnames";

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
  const ImgClasses = cs({ AuthorCSImg: author, AuthorCSImgNo: !author });
  return (
    <StyledArticlePost author={author} className={cs({ authorCS: author })}>
      <Img imgSrc={imgH} className={ImgClasses} />
      <ContentDiv author={author}>
        {author && <Typography content={author} textTag="p" />}
        <Typography
          content={h3Content}
          textTag="h3"
          lightCase={author ? true : false}
        />
        <Typography content={pContent} textTag="p" />
      </ContentDiv>
    </StyledArticlePost>
  );
};

export default ArticlePost;

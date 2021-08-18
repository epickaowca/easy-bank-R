import { FC } from "react";
import StyledMainSection from "./MainSection.style";
import PostContainer from "../postContainer/PostContainer";
import Typography from "../../atoms/typography/Typography";

interface MainSectionInterface {
  h1: string;
  case: "articles" | "benefits";
  p?: string;
}

const MainSection: FC<MainSectionInterface> = ({ h1, p }) => {
  return (
    <StyledMainSection>
      <div>
        <article>
          <Typography textTag="h1" content={h1} />
          {p && <Typography textTag="p" content={p} />}
        </article>
        <PostContainer />
      </div>
    </StyledMainSection>
  );
};

export default MainSection;

import { FC } from "react";
import StyledMainSection from "./MainSection.style";
import PostContainer from "../postContainer/PostContainer";
import Typography from "../../atoms/typography/Typography";
import Heading from "../../molecules/heading/Heading";

interface MainSectionInterface {
  h1: string;
  postsCase?: boolean;
  p?: string;
}

const MainSection: FC<MainSectionInterface> = ({ postsCase, h1, p }) => {
  return (
    <StyledMainSection>
      <div>
        <Heading h1={h1} p={p} />
        <PostContainer postCase={postsCase} />
      </div>
    </StyledMainSection>
  );
};

export default MainSection;

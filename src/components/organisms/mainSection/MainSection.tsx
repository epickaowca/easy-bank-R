import { FC } from "react";
import StyledMainSection, { SMSInterface } from "./MainSection.style";
import PostContainer from "../postContainer/PostContainer";
import Heading from "../../molecules/heading/Heading";

interface MainSectionInterface extends SMSInterface {
  h1: string;
  p?: string;
}

const MainSection: FC<MainSectionInterface> = ({ postsCase, h1, p }) => {
  return (
    <StyledMainSection postsCase={postsCase}>
      <div>
        <Heading h1={h1} p={p} />
        <PostContainer postCase={postsCase} />
      </div>
    </StyledMainSection>
  );
};

export default MainSection;

import { FC } from "react";
import StyledTypography, { STInterface } from "./Typography.style";

interface TypograpgyInterface extends STInterface {
  content?: string;
}

const Text: FC<TypograpgyInterface> = ({
  content,
  textColor,
  textTag,
  href,
}) => {
  return (
    <StyledTypography href={href} textColor={textColor} textTag={textTag}>
      {content ? content : "null"}
    </StyledTypography>
  );
};

export default Text;

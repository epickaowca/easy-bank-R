import { FC } from "react";
import StyledTypography, { STInterface } from "./Typography.style";
import { getImg } from "../../particles/utilities";

export interface TypograpgyInterface extends STInterface {
  content?: string;
  onClick?: () => void;
}

const Text: FC<TypograpgyInterface> = (props) => {
  const { content, icoName, onClick } = props;
  let Icon = null;
  if (icoName) {
    Icon = getImg(icoName);
  }
  return (
    <StyledTypography onClick={onClick} {...props}>
      {content ? content : icoName ? <img src={Icon} /> : "null"}
    </StyledTypography>
  );
};

export default Text;

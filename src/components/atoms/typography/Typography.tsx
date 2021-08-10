import { FC } from "react";
import StyledTypography, { STInterface } from "./Typography.style";
import { getIco } from "../../particles/utilities";

export interface TypograpgyInterface extends STInterface {
  content?: string;
  icoName?: string;
  onClick?: () => void;
}

const Text: FC<TypograpgyInterface> = (props) => {
  const { content, icoName, onClick } = props;
  let Icon = null;
  if (icoName) {
    Icon = getIco(icoName);
  }
  return (
    <StyledTypography onClick={onClick} {...props}>
      {content ? content : icoName ? <img src={Icon} /> : "null"}
    </StyledTypography>
  );
};

export default Text;

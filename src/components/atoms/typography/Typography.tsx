import { FC } from "react";
import StyledTypography, { STInterface } from "./Typography.style";
const prePath = "../../assets";

interface TypograpgyInterface extends STInterface {
  content?: string;
}

const Text: FC<TypograpgyInterface> = (props) => {
  const { content, icoName } = props;
  let Icon = null;
  if (icoName) {
    Icon = require(`${prePath}/${icoName}`).default;
  }
  return (
    <StyledTypography {...props}>
      {content ? content : icoName ? <img src={Icon} /> : "null"}
    </StyledTypography>
  );
};

export default Text;

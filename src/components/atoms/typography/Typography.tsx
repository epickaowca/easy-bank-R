import { FC } from "react";
import StyledTypography, { STInterface } from "./Typography.style";

interface TypograpgyInterface extends STInterface {
  content?: string;
}

const Text: FC<TypograpgyInterface> = (props) => {
  const { content, icoName } = props;
  let Icon = null;
  if (props.icoName) {
    Icon = require(`../../assets/${props.icoName}`).default;
  }
  return (
    <StyledTypography {...props}>
      {content ? content : icoName ? <img src={Icon} /> : "null"}
    </StyledTypography>
  );
};

export default Text;

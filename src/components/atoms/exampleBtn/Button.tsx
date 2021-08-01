import { FC } from "react";
import StyledButton from "./Button.style";

const Avatar: FC<{ content: string }> = ({ content }) => {
  return <StyledButton>{content}</StyledButton>;
};

export default Avatar;

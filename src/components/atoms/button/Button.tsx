import { FC } from "react";
import StyledBtn from "./Button.style";

const Button: FC<{ content?: string }> = ({ content }) => {
  return <StyledBtn>{content ? content : "null"}</StyledBtn>;
};

export default Button;

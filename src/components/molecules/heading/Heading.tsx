import { FC } from "react";
import StyledHeading from "./Heading.style";
import Button from "../../atoms/button/Button";
import Typography from "../../atoms/typography/Typography";

interface HeadingInterface {
  h1: string;
  p?: string;
  button?: string;
}

const Heading: FC<HeadingInterface> = ({ h1, p, button }) => {
  return (
    <StyledHeading>
      <Typography textTag="h1" content={h1} />
      {p && <Typography textTag="p" content={p} />}
      {button && <Button content={button} />}
    </StyledHeading>
  );
};

export default Heading;

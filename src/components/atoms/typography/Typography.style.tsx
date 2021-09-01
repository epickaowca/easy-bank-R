import styled, { css } from "styled-components";
import { btnStyles } from "../button/Button.style";

export type STInterface = {
  textTag: "p" | "a" | "h1" | "h3" | "button";
  href?: string;
  presentationCase?: boolean;
  lightCase?: boolean;
  icoName?: string;
};

const presentationStyle = `
  background: black;
  padding: 15px;
  padding-top: 20px;
`;

const choosenTag = (tag: string) => {
  if (!Object.keys(stylesH).includes(tag)) return "";
  return `
  color: ${stylesH[tag][0]};
  font-size: ${stylesH[tag][1]};
  `;
};

const stylesH: {
  [key: string]: [string, string];
} = {
  h1: ["#2D314D", "2rem"],
  p: ["rgba(0,0,0,.5)", "1rem"],
  h3: ["black", "1.2rem"],
};

const StyledText = styled.p.attrs<STInterface>((p) => ({
  as: p.textTag || "p",
  href: p.href || "#",
}))<STInterface>(
  ({ lightCase, presentationCase, textTag }) => css`
    ${choosenTag(textTag)};
    ${lightCase && `font-weight: 400;`};
    ${presentationCase && presentationStyle}
    ${textTag === "button" && btnStyles};
  `
);

export default StyledText;

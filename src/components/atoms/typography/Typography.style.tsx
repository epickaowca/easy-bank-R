import styled from "styled-components";
import { btnStyles } from "../button/Button.style";

export type STInterface = {
  textTag: "p" | "a" | "h1" | "h3" | "button";
  href?: string;
  presentationCase?: boolean;
  lightCase?: boolean;
};

const StyledText = styled.p.attrs<STInterface>((p) => ({
  as: p.textTag || "p",
  href: p.href || "#",
}))<STInterface>`
  color: ${(p) =>
    p.textTag === "h1"
      ? p.theme.colors.headingText
      : p.textTag === "p"
      ? "rgba(0,0,0,.7)"
      : "black"};
  font-size: ${(p) =>
    p.textTag === "h1" ? "2rem" : p.textTag === "h3" ? "1.2rem" : "1rem"};
  ${(p) => p.lightCase && `font-weight: 400;`};
  ${(p) =>
    p.presentationCase &&
    `
      background: black;
      padding: 15px;
      padding-top: 20px;
  `}
  ${(p) => p.textTag === "button" && btnStyles}
`;

export default StyledText;

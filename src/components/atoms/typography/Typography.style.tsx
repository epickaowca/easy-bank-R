import styled from "styled-components";

export type STInterface = {
  textTag?: string;
  textColor?: string;
  href?: string;
  icoName?: string;
  presentationCase?: boolean;
  footerCase?: boolean;
  blank?: boolean;
};

const StyledText = styled.p.attrs<STInterface>((p) => ({
  as: p.textTag || "p",
  href: p.href || "#",
  target: p.blank ? "_blank" : "",
}))<STInterface>`
  color: ${(p) => p.textColor || "black"};
  ${(p) =>
    p.textTag === "a" &&
    `
      &:hover {
        opacity: 0.7;
      }
  `}
  ${(p) =>
    p.presentationCase &&
    `
      background: black;
      padding: 15px;
      padding-top: 20px;
  `}
`;

export default StyledText;

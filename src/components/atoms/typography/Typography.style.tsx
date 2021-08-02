import styled from "styled-components";

export type STInterface = {
  textTag?: string;
  textColor?: string;
  href?: string;
};

const StyledText = styled.p.attrs<STInterface>((p) => ({
  as: p.textTag || "p",
  href: p.href || "#",
}))<STInterface>`
  color: ${(p) => p.textColor || "black"};
`;

export default StyledText;

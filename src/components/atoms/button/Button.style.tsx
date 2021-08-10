import styled, { css } from "styled-components";

export const btnStyles = css`
  border: none;
  background: none;
  cursor: pointer;
`;

const StyledBtn = styled.button`
  ${btnStyles};
  background: linear-gradient(
    90deg,
    rgb(49, 211, 92) 0%,
    rgb(43, 183, 218) 100%
  );
  padding: 12px 25px;
  color: white;
  font-size: 16px;
  border-radius: 20px;
`;

export default StyledBtn;

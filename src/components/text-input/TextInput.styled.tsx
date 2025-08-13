import styled, { css } from "styled-components";

import { MarginProps } from "../utils-components/UtilsComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`;

export const TextInput = styled.input.attrs({ type: "text" })<MarginProps>`
  ${({ theme, $marginBottom }) => css`
    font-weight: 700;
    &:focus {
      border-color: #000;
      outline: none;
    }
  `}
  ${({ $marginBottom }) =>
    $marginBottom &&
    css`
      margin-bottom: ${$marginBottom}px;
    `};
`;

import styled, { css } from "styled-components";

export type ButtonKind = "primary" | "secondary" | "black" | "red";
export type ButtonSize = "lg" | "sm";

interface ButtonProps {
  $kind: ButtonKind;
  $isFullWidth: boolean;
  $disabled: boolean;
}

export const Button = styled.button.attrs({ type: "button" })<ButtonProps>`
  ${({ theme, $isFullWidth }) =>
    css`
      display: flex;
      height: 52px;
      align-items: center;
      justify-content: center;
      font-family: ${theme.fontFamily.foco};
      font-size: 18px;
      padding: 0 30px;
      font-weight: 700;
      border-radius: 12px;
      white-space: nowrap;
      gap: 10px;
      width: ${$isFullWidth ? "100%" : "fit-content"};
    `};

  ${({ theme, $kind }) =>
    (() => {
      switch ($kind) {
        case "secondary":
          return css`
            background-color: #fff;
            color: ${theme.colors["gray-8"]};
            border: 1px ${theme.colors["light-gray"]} solid;
          `;
        case "black":
          return css`
            background-color: ${theme.colors["almost-black"]};
            color: #fff;
          `;
        case "red":
          return css`
            background-color: ${theme.colors["cluk-red"]};
            color: #fff;
          `;
        case "primary":
        default:
          return css`
            background-color: ${theme.colors["button-green"]};
            color: #ffffff;
          `;
      }
    })()};

  ${({ theme, $kind, $disabled }) =>
    $disabled &&
    css`
      background-color: ${theme.colors["light-gray"]};
      color: ${theme.colors["dark-gray"]};
      border-color: ${theme.colors["light-gray"]};
      cursor: not-allowed;
      pointer-events: none;
    `};
`;

import styled, { css, keyframes } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.span<{
  $diameter: number;
  $borderWidth: number;
  $offset?: SpinnerProps["offset"];
}>`
  ${({ theme, $diameter, $borderWidth, $offset }) => css`
    width: ${$diameter}px;
    height: ${$diameter}px;
    display: flex;
    position: relative;
    top: ${$offset?.top ?? 0}px;
    left: ${$offset?.left ?? 0}px;

    border-width: ${$borderWidth}px;
    border-style: solid;
    border-color: ${theme.colors["cluk-red"]};
    border-top-color: #000000;
    border-radius: 9999px;

    animation: ${rotation} 1s linear infinite;
  `}
`;

export interface SpinnerProps
  extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  offset?: {
    top?: number;
    left?: number;
  };
  diameter?: number;
  borderWidth?: number;
}

export const Spinner = ({
  diameter = 60,
  borderWidth = 9,
  offset,
  ...props
}: SpinnerProps) => (
  <StyledSpinner
    $diameter={diameter}
    $borderWidth={borderWidth}
    $offset={offset}
    {...props}
  />
);

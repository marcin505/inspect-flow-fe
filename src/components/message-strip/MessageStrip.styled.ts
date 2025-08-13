import styled, { css } from "styled-components";

export const Container = styled.span<{
  $type: "success" | "fail";
  $marginTop?: number;
  $marginBottom?: number;
}>`
  ${({ theme, $type, $marginTop = 0, $marginBottom = 0 }) => css`
    display: flex;
    align-items: center;
    height: 48px;
    gap: 12px;
    padding: 0 12px;
    border-radius: 4px;
    margin-top: ${$marginTop}px;
    margin-bottom: ${$marginBottom}px;
    font-weight: 700;

    background-color: ${(() => {
      switch ($type) {
        case "fail":
          return theme.colors["fail-red"];
        case "success":
        default:
          return theme.colors["mint-green"];
      }
    })()};

    color: ${(() => {
      switch ($type) {
        case "fail":
          return theme.colors["red-2"];
        case "success":
        default:
          return theme.colors["almost-black"];
      }
    })()};
  `}
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background: #fff;
`;

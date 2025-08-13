import styled, { css } from "styled-components";

import { layoutPadding } from "../layout/Layout";

export interface MarginProps {
  $marginTop?: number;
  $marginBottom?: number;
  $marginLeft?: number;
  $marginRight?: number;
}

export interface VerticalOffsetProps {
  $top?: number;
}
interface TextProps {
  $textAlign?: "left" | "center" | "right";
  $color?: "gray" | "black";
  $fontWeight?: 300 | 700;
  $lineHeight?: number;
}

export interface FlexProps {
  $justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  $alignItems?: "flex-start" | "center" | "flex-end";
  $flexDirection?: "row" | "column";
  $gap?: number;
}

export const HeadingSmall = styled.span<{ $margin?: string; $color?: string }>`
  ${({ theme, $margin = "0", $color }) => css`
    font-size: 14px;
    color: ${$color ?? theme.colors["gray-8"]};
    font-weight: 700;
    margin: ${$margin};
    align-items: ;
  `}
`;

export const HeadingMedium = styled.span<MarginProps & TextProps>`
  ${({ theme, $marginTop = 0, $textAlign = "left", $color = "gray" }) => css`
    font-weight: 400;
    font-size: 22px;
    color: ${$color === "gray" ? theme.colors["gray-5"] : theme.colors.black};
    margin-top: ${$marginTop}px;
    text-align: ${$textAlign};
  `}
`;

export const HeadingLarge = styled.span<MarginProps & TextProps>`
  ${({
    theme,
    $fontWeight = 300,
    $marginBottom = 0,
    $marginTop = 0,
    $lineHeight = 24,
    $textAlign = "left",
  }) => css`
    font-weight: ${$fontWeight};
    font-size: 41px;
    color: ${theme.colors["almost-black-2"]};
    line-height: ${$lineHeight}px;
    margin-bottom: ${$marginBottom}px;
    margin-top: ${$marginTop}px;
    white-space: nowrap;
    text-align: ${$textAlign};
  `}
`;

export const PageHeading = styled.span<MarginProps>`
  ${({ theme, $marginBottom = 35, $marginTop = 0 }) => css`
    font-weight: 700;
    font-size: 28px;
    margin-top: ${$marginTop}px;
    margin-bottom: ${$marginBottom}px;

    color: ${theme.colors["almost-black-2"]};
    white-space: nowrap;
  `}
`;

export const ModalHeading = styled.span<MarginProps>`
  ${({ theme, $marginBottom = 20, $marginTop = 0 }) => css`
    font-weight: 700;
    font-size: 22px;
    margin-top: ${$marginTop}px;
    margin-bottom: ${$marginBottom}px;
    color: ${theme.colors["almost-black-2"]};
    white-space: nowrap;
  `}
`;

export const SubHeading = styled.span<
  {
    $fontWeight?: number;
  } & MarginProps
>`
  ${({ theme, $marginBottom = 0, $marginTop = 0, $fontWeight = 400 }) => css`
    font-weight: ${$fontWeight};
    font-size: 22px;
    color: ${theme.colors["gray-5"]};
    margin-bottom: ${$marginBottom}px;
    margin-top: ${$marginTop}px;
    line-height: 38px;
    opacity: 0.7;
  `}
`;

export const SubHeadingSmall = styled.span<MarginProps>`
  ${({ theme, $marginBottom = 0, $marginTop = 0 }) => css`
    font-weight: 400;
    font-size: 16px;
    margin-top: ${$marginTop}px;
    margin-bottom: ${$marginBottom}px;

    color: ${theme.colors["gray-9"]};
    /* opacity: 0.7; */
    white-space: nowrap;
  `}
`;

export const SpanSmall = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors["gray-7"]};
    font-weight: 400;
    font-size: 12px;
  `}
`;

export const SpanMedium = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors["almost-black-2"]};
    font-weight: 400;
    font-size: 18px;
    line-height: 12px;
  `}
`;

export const FlexHorizontal = styled.div<FlexProps>`
  ${({ theme, $alignItems, $justifyContent }) => css`
    display: flex;
    align-items: ${$alignItems};
    justify-content: ${$justifyContent};
  `}

  ${({ $gap }) =>
    $gap != null &&
    css`
      gap: ${$gap}px;
    `}
`;

export const FlexVertical = styled.div<{
  $gap?: number;
  $grow?: boolean;
  $fullWidth?: boolean;
}>`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  ${({ $gap }) =>
    $gap != null &&
    css`
      gap: ${$gap}px;
    `}
  ${({ $grow }) =>
    $grow != null &&
    css`
      flex-grow: 1;
    `}
  ${({ $fullWidth }) =>
    $fullWidth != null &&
    css`
      width: 100%;
    `}
`;

export const ItalicDisclaimer = styled.span`
  ${({ theme }) => css`
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    color: ${theme.colors["gray-5"]};
  `}
`;

export const LogoLarge = styled.div`
  background: url("../public/images/logo-large.png");
  width: 113px;
  height: 118px;
`;

export const ButtonsSubContainer = styled.div``;
export const ButtonsContainer = styled.div<MarginProps & FlexProps>`
  ${({ $marginTop = 0, $marginBottom = 0, $justifyContent = "start" }) => css`
    display: flex;
    gap: 32px;
    justify-content: ${$justifyContent};
    margin-top: ${$marginTop}px;
    margin-bottom: ${$marginBottom}px;

    ${ButtonsSubContainer} {
      display: flex;
      gap: 10px;
    }
  `}
`;

export const WarningContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 52px;
    padding: 18px 29px 18px 29px;
    border-radius: 5px;
    background-color: ${theme.colors.pink};
    border: 1px ${theme.colors["red-3"]} solid;
    font-size: 18px;
    font-weight: 400;

    .bold {
      font-weight: 700;
    }
    .red {
      color: ${theme.colors["red-4"]};
    }
  `}
`;

export const RoundContainer = styled.div<{ $padding?: number }>`
  ${({ theme, $padding = 20 }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${$padding}px;
    border: 1px ${theme.colors["gray-4"]} solid;
    border-radius: 16px;
    flex-grow: 1;
    max-height: calc(100vh - 124px);
    overflow-y: auto;
  `}
`;

export const FullHeightRoundContainer = styled(RoundContainer)<{
  $heightReduce?: number;
}>`
  ${({ $heightReduce = layoutPadding }) => css`
    min-height: calc(100vh - ${2 * $heightReduce}px);
    max-height: calc(100vh - ${2 * $heightReduce}px);
  `}
`;

export const InputHeading = styled.div<MarginProps>`
  ${({ theme, $marginBottom = 0, $marginTop = 0 }) => css`
    display: flex;
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors["gray-7"]};
    margin-bottom: ${$marginBottom}px;
    margin-top: ${$marginTop}px;
    gap: 4px;
  `}
`;

export const InputWarning = styled.span`
  ${({ theme }) => css`
    margin-top: 2px;
    color: ${theme.colors["cluk-red"]};
    font-size: 12px;
    font-weight: 700;
    height: 18px;
  `}
`;

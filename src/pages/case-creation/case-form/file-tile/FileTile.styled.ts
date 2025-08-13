import styled, { css } from "styled-components";

import {
  FlexProps,
  MarginProps,
  VerticalOffsetProps,
} from "~/components/utils-components/UtilsComponents";

export const FileInfo = styled.div<FlexProps>`
  ${({ $flexDirection = "column" }) => css`
    flex-direction: ${$flexDirection};
  `}
`;

export const IconContainer = styled.div<MarginProps & VerticalOffsetProps>`
  ${({ $marginLeft = 0 }) =>
    $marginLeft !== null &&
    css`
      margin-left: ${$marginLeft}px;
    `}

  ${({ $top }) =>
    $top !== null &&
    css`
      position: relative;
      top: ${$top}px;
    `}
`;

export const Extension = styled.div``;
export const FileName = styled.span``;
export const FileSize = styled.span``;
export const FileExtensionSpan = styled.span``;
export const PasswordProtectedWarning = styled.span``;
export const Container = styled.div<{
  $isError?: boolean;
}>`
  ${({ theme, $isError = false }) => css`
    display: flex;
    gap: 12px;
    align-items: center;
    border: 1px ${$isError ? theme.colors["red-3"] : theme.colors["gray-10"]}
      solid;
    min-width: 258px;
    height: 70px;
    padding: 15px;
    border-radius: 12px;

    ${Extension} {
      display: flex;
      padding: 2px 0 0 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 28px;
      background-color: #f5f5f5;
      border: ${theme.colors["gray-10"]};
      border-radius: 3px;

      ${FileExtensionSpan} {
        font-size: 7px;
        font-weight: 400;
        text-transform: uppercase;
      }
    }

    ${FileInfo} {
      display: flex;
      line-height: 20px;
      flex-grow: 1;
      overflow: hidden;
      ${FileName} {
        font-weight: 400;
        font-size: 17px;
        color: #000;
        overflow: hidden;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      ${FileSize} {
        font-weight: 400;
        font-size: 14px;
        color: ${theme.colors["gray-9"]};
      }
    }

    ${IconContainer} {
      display: flex;
      min-width: 24px;
      height: 24px;
      align-items: center;
      justify-content: center;
      gap: 4px;

      ${PasswordProtectedWarning} {
        color: ${theme.colors["red-2"]};
        font-size: 12px;
        white-space: nowrap;
      }
    }
  `}
`;

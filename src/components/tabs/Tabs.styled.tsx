import styled, { css } from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  /* height: 80px; */
`;

export const CountContainer = styled.div``;
export const Tab = styled.button<{ $selected?: boolean }>`
  ${({ theme, $selected }) => css`
    display: flex;
    height: 64px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    white-space: nowrap;
    font-size: 18px;
    gap: 12px;

    color: ${theme.colors[$selected ? "red-4" : "gray-3"]};
    font-weight: ${$selected ? 700 : 400};
    border-bottom: ${$selected ? `2px ${theme.colors["red-4"]} solid` : "none"};

    ${CountContainer} {
      display: flex;
      align-items: center;
      border-radius: 2px;
      height: 26px;
      padding: 0 8px;
      background-color: ${theme.colors["pink-5"]};
    }
  `}
`;

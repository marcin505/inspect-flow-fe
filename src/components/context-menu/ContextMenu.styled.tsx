import styled, { css } from "styled-components";
import { MenuItems as MenuItemsHeadless } from "@headlessui/react";

const radius = 3;

export const TriggerButton = styled.button`
  ${({ theme }) => css`
    font-size: 18px;
    cursor: pointer;
    padding: 4px 6px;
    &:hover {
      background-color: ${theme.colors["almost-white"]};
    }
  `}
`;

export const MenuItems = styled(MenuItemsHeadless)<{ $rightOffset?: number }>`
  ${({ theme }) => css`
    position: absolute;

    min-width: 60px;
    box-shadow: ${theme.shadows["shadow-1"]};

    z-index: 10000;
  `}
`;

export const MenuOption = styled.div<{ $active: boolean }>`
  ${({ theme, $active }) => css`
    padding: 0.5rem 1rem;
    cursor: pointer;
    color: ${$active ? "#111827" : "#4b5563"};
    background-color: white;

    border-left: 1px solid ${theme.colors["light-gray"]};
    border-right: 1px solid ${theme.colors["light-gray"]};

    &:hover,
    &:focus {
      background-color: ${theme.colors["select-option-hover"]};
    }

    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors["light-gray"]};
    }

    &:first-child {
      border-top-left-radius: ${radius}px;
      border-top-right-radius: ${radius}px;
      border-top: 1px solid ${theme.colors["light-gray"]};
    }

    &:last-child {
      border-bottom-left-radius: ${radius}px;
      border-bottom-right-radius: ${radius}px;
      border-bottom: 1px solid ${theme.colors["light-gray"]};
    }

    /* Nested styles for hover and active states */
    &:active {
      color: #111827;
    }
  `}
`;

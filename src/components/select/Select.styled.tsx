import styled, { css } from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropdownWrapper = styled.div<{ $minWidth?: number }>`
  position: relative;
  width: 100%;

  ${({ $minWidth }) =>
    $minWidth &&
    css`
      min-width: ${$minWidth}px;
    `};
`;

export const Button = styled.button`
  ${({ theme, disabled }) => css`
    background-color: ${disabled ? theme.colors["gray-11"] : "#fff"};
    padding: 8px 12px 8px 12px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    cursor: ${disabled ? "normal" : "pointer"};
    color: ${disabled ? theme.colors["gray-8"] : theme.colors["almost-black"]};
    font-weight: 400;

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  `}
`;

export const SelectOptions = styled.ul<{ $topOffset?: number }>`
  ${({ theme }) => css`
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    margin-top: 8px;
    z-index: 1000;
    box-shadow: ${theme.shadows["shadow-1"]};
  `}

  ${({ $topOffset }) =>
    $topOffset &&
    css`
      top: calc(-${$topOffset}px + 10px);
    `};
`;

export const SelectOption = styled.li<{ $active: boolean }>`
  ${({ theme, $active }) => css`
    display: flex;
    align-items: center;
    height: 44px;
    cursor: pointer;
    color: #000;

    background-color: ${$active ? theme.colors["select-option-hover"] : "#fff"};
    &:hover {
      background-color: ${theme.colors["select-option-hover"]};
    }
  `}
`;

export const CheckmarkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  padding-left: 12px;
  padding-right: 8px;
  box-sizing: content-box;
`;

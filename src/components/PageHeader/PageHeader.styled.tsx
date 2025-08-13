import styled, { css } from "styled-components";

import { Button } from "~/components/button";

export const TopContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    width: 100%;
    justify-content: space-between;
    height: 64px;
    margin: 0 0 20px 0;
  `}
`;

export const BackButton = styled(Button)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 16px;
    background-color: transparent;
    padding: 0;
    span {
      color: #000;
      font-size: 16px;
    }
  `}
`;

export const Circle = styled.div`
  ${({ theme }) => css`
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors["pink-4"]};
    border-radius: 24px;
  `}
`;

export const AccountContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 64px;
    border-left: 1px ${theme.colors["light-gray"]} solid;
    padding-left: 16px;
    gap: 16px;
    span {
      font-size: 18px;
      font-weight: 700;
      white-space: nowrap;
    }
  `}
`;

export const AccountContainerContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const AccountCircle = styled.div`
  ${({ theme }) => css`
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.green};
    border-radius: 50px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  `}
`;

import styled, { css } from "styled-components";

import { gap } from "../../CaseCreation.styled";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 0 46px;
    gap: 24px;
    margin-top: 28px;

    border: 1px ${theme.colors["gray-6"]} solid;
    background-color: ${theme.colors["lighter-gray"]};
    min-height: 162px;
    max-height: 162px;
    border-radius: 12px;
    margin-bottom: ${gap}px;
  `}
`;

export const SomeTextHolder = styled.div``;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-content: space-between;
  height: 70px;

  ${SomeTextHolder} {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

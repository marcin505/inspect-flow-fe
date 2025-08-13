import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: 30px;
    font-weight: 600;
    color: ${theme.colors.black};
  `}
`;

export const Subtitle = styled.div`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors["gray-2"]};
    margin: 0px 0 24px;
  `}
`;

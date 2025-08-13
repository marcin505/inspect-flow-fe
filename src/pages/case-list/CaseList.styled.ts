import styled, { css } from "styled-components";

export const AddCaseButtonContainer = styled.div`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 30px;
    right: 30px;
    background-color: ${theme.colors["blue-2"]};
  `}
`;

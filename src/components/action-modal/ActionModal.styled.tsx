import styled, { css } from "styled-components";

export const ActionModalContainer = styled.div`
  display: flex;
  min-width: 700px;
  max-width: 700px;
  min-height: 396px;
  flex-direction: column;
  padding: 40px 20px;
  align-items: center;
`;

export const Disclaimer = styled.div`
  ${({ theme }) => css`
    font-size: 27px;
    font-weight: 300;
    text-align: center;
    color: ${theme.colors.black};
    line-height: 30px;
  `}
`;

export const MessageContainer = styled(Disclaimer)`
  margin-bottom: 30px;
`;

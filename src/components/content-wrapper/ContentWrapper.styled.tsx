import styled, { css } from "styled-components";

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 36px;
`;

export const H1 = styled.h1`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 44px;
    font-weight: 600;
  `}
`;

export const Description = styled.span`
  max-width: 736px;
  font-size: 16px;
  line-height: 26px;
`;

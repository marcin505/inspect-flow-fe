import styled, { css } from "styled-components";

import { ItalicDisclaimer } from "~/components/utils-components/UtilsComponents";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  margin-top: 26px;
  width: 1080px;

  @media (max-width: 1160px) {
    width: 100%;
  }
`;

export const gap = 32;

export const Disclaimer = styled(ItalicDisclaimer)`
  ${({ theme }) => css`
    display: flex;
    margin: 40px 0;
    gap: 14px;
  `}
`;

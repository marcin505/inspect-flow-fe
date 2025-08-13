import styled, { css } from "styled-components";

import { layoutPadding } from "~/components/layout/Layout";

export const FilesContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    border-radius: 12px;
    flex-wrap: wrap;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: ${layoutPadding}px;
    row-gap: ${layoutPadding}px;

    @media (max-width: 1020px) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

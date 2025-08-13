import styled from "styled-components";
import { SortDirection } from "@tanstack/react-table";

import { ArrowUpIcon } from "@ui/icons/ArrowUpIcon";
import { ArrowDownIcon } from "@ui/icons";

interface SortingArrowsProps {
  sortingOrder: SortDirection | false;
}

const Container = styled.div`
  position: relative;
  height: 16px;
  top: 4px;
`;

const SubContainer = styled.div`
  position: absolute;
  left: 6px;
`;

export const SortingArrows = ({ sortingOrder }: SortingArrowsProps) => {
  if (!sortingOrder) return null;
  return (
    <Container>
      <SubContainer>
        {sortingOrder === "asc" ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </SubContainer>
    </Container>
  );
};

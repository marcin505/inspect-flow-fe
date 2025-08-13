import React from "react";
import styled from "styled-components";
import { Report } from "./types";
import { useNavigate } from "react-router";
import { Button } from "~/components/button";
import { baseURL, genericFetch } from "@utils/utils";
import { toast } from "react-toastify";

interface ReportsTableProps {
  reports: Report[] | null;
  refetchList: () => void;
}

/**
 * Styled components
 */
const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;
  background: var(--color-surface, #ffffff);
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
  font-family: inherit;
  color: var(--color-text, #0f172a);
`;

const THead = styled.thead`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.02), transparent);
  th {
    text-align: left;
    padding: 12px 16px;
    font-size: 12px;
    font-weight: 600;
    color: var(--color-muted, #475569);
    letter-spacing: 0.02em;
    border-bottom: 1px solid rgba(15, 23, 42, 0.06);
  }
`;

const ClickableSpan = styled.span`
  color: blue;
  cursor: pointer;
`;

const TBody = styled.tbody`
  tr {
    transition: background 0.12s ease, transform 0.12s ease;
  }

  tr:nth-child(even) {
    background: rgba(15, 23, 42, 0.02);
  }

  td {
    padding: 12px 16px;
    font-size: 14px;
    vertical-align: middle;
    border-bottom: 1px solid rgba(15, 23, 42, 0.04);
  }
`;

const EmptyRow = styled.tr`
  td {
    padding: 24px;
    text-align: center;
    color: var(--color-muted, #64748b);
  }
`;

const ClickableRow = styled.tr<{ clickable?: boolean }>`
  ${({ clickable }) =>
    clickable
      ? `
   cursor: pointer;
   &:hover {
     background: rgba(34,197,94,0.06);
     transform: translateY(-1px);
   }
   &:active {
     transform: translateY(0);
   }
 `
      : ""}
`;

/**
 * Component
 */
export default function ReportsTable({
  reports,
  refetchList,
}: ReportsTableProps) {
  const navigate = useNavigate();

  const onIdClick = (reportId: number) => {
    navigate(`/case-details/${reportId}`);
  };
  const onDelete = (reportId: number) => {
    (async () => {
      try {
        await genericFetch<null>({
          url: `${baseURL}/reports/${reportId}`,
          method: "DELETE",
        });
        toast.success("Case has been deleted");
        refetchList();
      } catch (e) {}
    })();
  };
  if (reports === null) {
    return (
      <Wrapper>
        <EmptyRow>
          <td>No records</td>
        </EmptyRow>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <StyledTable role="table" aria-label="Reports">
        <caption
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
          }}
        >
          Reports
        </caption>
        <THead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Vehicle</th>
            <th scope="col">Created At</th>
            <th scope="col">Delete</th>
          </tr>
        </THead>

        <TBody>
          {reports.length === 0 ? (
            <EmptyRow>
              <td colSpan={4}>No reports available</td>
            </EmptyRow>
          ) : (
            reports.map((r) => {
              return (
                <ClickableRow key={r.reportId}>
                  <td>
                    <ClickableSpan onClick={() => onIdClick(r.reportId)}>
                      {r.reportId}
                    </ClickableSpan>
                  </td>
                  <td>{r.username}</td>
                  <td>{r.vehicle}</td>
                  <td>{new Date(r.createdAt).toLocaleString()}</td>
                  <td>
                    <ClickableSpan onClick={() => onDelete(r.reportId)}>
                      Delete
                    </ClickableSpan>
                  </td>
                </ClickableRow>
              );
            })
          )}
        </TBody>
      </StyledTable>
    </Wrapper>
  );
}

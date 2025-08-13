// Report detail page using styled-components
// File: src/pages/case-creation/ReportDetailPage.tsx

import React from "react";
import styled from "styled-components";

import { ReportDetail } from "../../case-creation/types";

interface ReportDetailPageProps {
  report: ReportDetail | null;
}

const Container = styled.main`
  max-width: 980px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0;
  color: var(--color-heading, #0f172a);
`;

const Card = styled.section`
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 20px;
  background: var(--color-surface, #ffffff);
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 6px 18px rgba(12, 18, 42, 0.06);
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 360px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #f8fafc, #fff);
  border: 1px solid rgba(15, 23, 42, 0.04);
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MetaList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px 16px;
`;

const MetaItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 12px;
  color: var(--color-muted, #64748b);
`;

const Value = styled.span`
  font-size: 14px;
  color: var(--color-text, #0f172a);
  font-weight: 600;
`;

const Tags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: rgba(14, 165, 164, 0.12);
  color: var(--color-primary, #0ea5a4);
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
`;

const Description = styled.article`
  grid-column: 1 / -1;
  background: rgba(15, 23, 42, 0.02);
  padding: 16px;
  border-radius: 8px;
  font-size: 14px;
  color: var(--color-text, #0f172a);
  line-height: 1.5;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const Primary = styled.button`
  background: var(--color-primary, #0ea5a4);
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    opacity: 0.95;
    transform: translateY(-1px);
  }
`;

const Secondary = styled.button`
  background: transparent;
  color: var(--color-text, #0f172a);
  border: 1px solid rgba(15, 23, 42, 0.06);
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
`;

export default function CaseDetailsContent({ report }: ReportDetailPageProps) {
  if (!report) {
    return (
      <Container>
        <Header>
          <Title>Case details</Title>
        </Header>
        <Card>
          <Description>No report selected or report not found.</Description>
        </Card>
      </Container>
    );
  }

  const formattedDate = new Date(report.createdAt).toLocaleString();

  // Copy reportId to clipboard. Use void to satisfy eslint for promise-returning call.
  const handleCopyId = () => {
    void navigator.clipboard?.writeText(String(report.reportId));
  };

  // Build image source: if it's base64 string, ensure proper data URI; fallback to empty
  const imageSrc = report.image?.startsWith("data:")
    ? report.image
    : report.image
    ? `data:image/jpeg;base64,${report.image}`
    : undefined;

  return (
    <Container>
      <Card>
        <ImageWrapper>
          {imageSrc ? (
            <PreviewImage
              src={imageSrc}
              alt={`Photo for report ${report.reportId}`}
            />
          ) : (
            <div style={{ padding: 16, color: "var(--color-muted, #64748b)" }}>
              No image
            </div>
          )}
        </ImageWrapper>

        <Meta>
          <MetaList>
            <MetaItem>
              <Label>Username</Label>
              <Value>{report.username}</Value>
            </MetaItem>

            <MetaItem>
              <Label>Vehicle</Label>
              <Value>{report.vehicle}</Value>
            </MetaItem>

            <MetaItem>
              <Label>Created</Label>
              <Value>{formattedDate}</Value>
            </MetaItem>

            <MetaItem>
              <Label>Report ID</Label>
              <Value>#{report.reportId}</Value>
            </MetaItem>
          </MetaList>

          <div>
            <Label>Damages</Label>
            <Tags>
              {report.damage && report.damage.length > 0 ? (
                report.damage.map((d, i) => <Tag key={i}>{d}</Tag>)
              ) : (
                <Value>None listed</Value>
              )}
            </Tags>
          </div>

          <Actions>
            <Secondary onClick={handleCopyId}>Copy ID</Secondary>
          </Actions>
        </Meta>

        <Description>
          <Label>Description</Label>
          <div style={{ marginTop: 8 }}>{report.description}</div>
        </Description>
      </Card>
    </Container>
  );
}

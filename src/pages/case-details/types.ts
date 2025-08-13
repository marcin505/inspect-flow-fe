/* Endpoint */
/* cluk-ai-uw/case-details */
// ___________________________

import { CaseStatus, ExtractionStatus } from "../case-list/types";

// cluk-ai-uw/case-details:
export type ExtractedCalculated = "extracted" | "calculated";
export type EntityDataFormat = "boolean" | "date" | "int" | "string";
export interface Attribute {
  chunkId: string;
  caseId: string;
  entity: string;
  entityValue: string;
  isMissing: boolean;
  extractedCalculated: ExtractedCalculated;
  sourceOfExtractedValue: string;
  entityDataFormat: EntityDataFormat;
  smallChunkWithTag: string;
  bigChunkWithTag: string;
  overrideReason: OverrideReason | null;
}

export interface CaseDetailsData {
  attributes: Attribute[];
  clientName: string;
  caseId: string;
}

export interface ViewChunksData {
  sourceName: string;
  chunk: Attribute;
}

export type CaseOverviewName =
  | "merlinId"
  | "deadlineDate"
  | "createdDate"
  | "uploadedBy"
  | "caseStatus"
  | "extractionStatus";

export interface CaseOverview {
  merlinId: string | null;
  deadlineDate: string | null;
  createdDate: string | null;
  uploadedBy: string | null;
  caseStatus: CaseStatus | null;
  extractionStatus: ExtractionStatus | null;
}

export interface CaseOverviewData {
  caseOverview: CaseOverview;
}

export type OverrideReason = "Wrong extraction" | "Additional information";
export interface UpdatedAttribute {
  chunkId: string;
  updatedEntityValue: string;
  reason: OverrideReason;
}

export interface CaseDetailsOverrideBody {
  overrides: UpdatedAttribute[];
}

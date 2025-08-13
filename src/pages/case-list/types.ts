// endpoint: "/cluk-ai-uw/case-list"

export interface CaseListData {
  caseList: Case[];
  count: Count;
}
export interface Case {
  caseId: string | null;
  clientName: string | null;
  advisorName: string | null;
  uploadedByName: string | null;
  createdDate: string | null;
  schemeName: string | null;
  livesCount: number | null;
  uwTeam: UWTeam | null;
  receivedDate: string | null; // 2024-02-21T05:18:47.656Z
  deadlineDate: string | null;
  caseStatus: CaseStatus | null;
  extractionStatus: ExtractionStatus | null;
  extractedCalculated: "extracted" | "calculated" | "modified" | null;
}

export type CaseKey = keyof Case;
export type UWTeam = "small" | "medium" | "large";
export type CaseStatus = "open" | "closed";
export type ExtractionStatus = "in progress" | "complete" | "fail";
export type Cases = "all" | "my";

export interface Count {
  all: number;
  my: number;
  closed: number;
  open: number;
}

// possible search param queries
export interface SearchQueryParams {
  cases: "all" | "my";
  page: number; // starting from 1
  pageSize: number;
  uwTeam: "small" | "medium" | "large" | "small,medium"; // "small,medium,large"; etc...
  caseStatus: "open" | "closed";
  sort: "uwTeam:asc" | "uwTeam:desc" | "caseName:asc" | "caseName:desc"; // etc.. sortable fields: caseName, productName, receivedDate, deadlineDate, uploadedByName, advisorName, extraction
}

export const caseListException = {
  errorMessage: "Something went wrong",
};

export type DeleteStage = "attempt" | "succes";

export interface FiltersState {
  pageSize: number | null;
  pageIndex: number | null;
  cases: Cases | null;
  caseStatus: CaseStatus | null;
  sort?: string | null;
}

export const defaultFilters: FiltersState = {
  cases: null,
  caseStatus: null,
  pageSize: null,
  pageIndex: null,
};

export interface CheckExtractionStatusUpdateData {
  extractionStatusUpdate: boolean;
}

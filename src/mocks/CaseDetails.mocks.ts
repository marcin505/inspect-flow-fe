import { faker } from "@faker-js/faker";

import { capitalizeWords } from "@utils/utils";
import {
  CaseOverviewData,
  CaseDetailsData,
  ViewChunksData,
} from "~/pages/case-details/types";
import { chunksMock } from "./ChunksMock";
import { CheckExtractionStatusUpdateData } from "~/pages/case-list/types";

export const caseDetailsData: CaseDetailsData = {
  attributes: chunksMock,
  clientName: capitalizeWords(
    `${faker.company.bsAdjective()} ${faker.company.bsNoun()}`
  ) as string,
  caseId: "806507",
};

export const viewChunksData: ViewChunksData = {
  sourceName: "Source: Spec document.pdf",
  chunk: chunksMock[2],
};

export const caseOverviewData: CaseOverviewData = {
  caseOverview: {
    merlinId: null,
    deadlineDate: faker.date.future().toISOString(),
    createdDate: faker.date.future().toISOString(),
    uploadedBy: faker.name.fullName(),
    caseStatus: "open",
    extractionStatus: "complete",
  },
};

export const checkExtractionStatusUpdateData: CheckExtractionStatusUpdateData =
  {
    extractionStatusUpdate: false,
  };

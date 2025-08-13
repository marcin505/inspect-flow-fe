import { faker } from "@faker-js/faker";

import { CaseListData, Case } from "~/pages/case-list/types";

const newCase = (): Case => ({
  caseId: `${faker.datatype.number({ min: 99, max: 999 })}`,
  clientName: `${faker.company.catchPhrase()}`,
  advisorName: faker.name.fullName(),
  uploadedByName: faker.name.fullName(),
  createdDate: faker.date.past().toISOString(),
  schemeName: faker.animal.bird(),
  livesCount: faker.datatype.number({ min: 3, max: 1660 }),
  uwTeam: faker.helpers.arrayElement(["small", "medium", "large"]),
  receivedDate: faker.date.past().toISOString(),
  deadlineDate: faker.date.past().toISOString(),
  caseStatus: faker.helpers.arrayElement(["open", "closed"]),
  extractionStatus: faker.helpers.arrayElement(["in progress", "complete"]),
  extractedCalculated: faker.helpers.arrayElement([
    "extracted",
    "calculated",
    "modified",
  ]),
});

const caseInitial: Case = {
  ...newCase(),
  clientName: null,
  uwTeam: null,
  receivedDate: null,
  deadlineDate: "",
};

export const caseList = [
  caseInitial,
  ...Array.from({ length: 50 }).map(() => newCase()),
];

export const caseListData: CaseListData = {
  caseList,
  count: {
    all: 110,
    my: 16,
    closed: 200,
    open: 12,
  },
};

import { faker } from "@faker-js/faker";

import { allowedFiles } from "~/pages/case-creation/case-form/utils";
import {
  CaseCreationData,
  CaseFilesData,
  CaseFilesStartData,
} from "~/pages/case-creation/types";

export const caseFilesData: CaseFilesData = {
  files: [
    {
      fileName: "batman.msg",
      caseId: "333",
      passwordProtected: true,
    },
    ...Array.from({ length: 49 }).map((_) => ({
      fileName: `${faker.company.bsBuzz()} ${faker.company.bsNoun()} ${faker.company.bsNoun()}.${faker.helpers.arrayElement(
        allowedFiles
      )}`,
      caseId: `${faker.datatype.number({ min: 99, max: 999 })}`,
      passwordProtected: faker.helpers.arrayElement([true, false]),
    })),
  ],
  ready: true,
};

export const caseFilesStartData: CaseFilesStartData = {
  message: "File extraction started",
};

export const caseCreationData: CaseCreationData = {
  caseId: "333",
};

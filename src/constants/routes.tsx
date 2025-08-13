import { Navigate } from "react-router";

import { CaseCreation } from "~/pages/case-creation/CaseCreation";
import { CaseList } from "~/pages/case-list/CaseList";
import { CaseDetails } from "~/pages/case-details/CaseDetails";

export interface CaseDetailsParams {
  caseId: string;
}

export const appRoutes = {
  CASE_CREATION: {
    path: "/case-creation",
    route: () => "/case-creation",
    element: <CaseCreation />,
  },
  CASE_LIST: {
    path: "/case-list",
    route: () => "/case-list",
    element: <CaseList />,
  },
  CASE_DETAILS: {
    path: "/case-details/:caseId",
    route: ({ caseId }: CaseDetailsParams) => `/case-details/${caseId}`,
    element: <CaseDetails />,
  },
  EMPTY: {
    path: "/",
    route: () => "/",
    element: <Navigate to={"/case-list"} />,
  },
};

export type RouteKey = keyof typeof appRoutes;

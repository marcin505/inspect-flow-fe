import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Layout } from "~/components/layout/Layout";
import {
  FlexVertical,
  FullHeightRoundContainer,
  HeadingLarge,
} from "~/components/utils-components/UtilsComponents";
import { InnerContainer } from "../case-creation/CaseCreation.styled";
import { PageHeader } from "~/components/PageHeader/PageHeader";
import CaseDetailsContent from "./CaseDetailsContent/CaseDetailsContent";
import { baseURL, genericFetch } from "@utils/utils";
import { ReportDetail } from "../case-creation/types";
import { Spinner } from "~/components/spinner/Spinner";

export const CaseDetails = () => {
  const [report, setReport] = useState<ReportDetail | null>(null);
  const [loading, setLoading] = useState(true);

  const { caseId = null } = useParams<{ caseId: string }>();

  useEffect(() => {
    if (!caseId) return;
    (async () => {
      const newReport = await genericFetch<ReportDetail>({
        url: `${baseURL}/reports/${caseId}`,
      });
      setReport(newReport);
      setLoading(false);
    })();
  }, [caseId]);

  return (
    <Layout>
      <FullHeightRoundContainer>
        <PageHeader backURL="/case-list" />
        <InnerContainer>
          <FlexVertical>
            <HeadingLarge $fontWeight={700}>Case details</HeadingLarge>
          </FlexVertical>
          {loading ? <Spinner /> : <CaseDetailsContent report={report} />}
        </InnerContainer>
      </FullHeightRoundContainer>
    </Layout>
  );
};

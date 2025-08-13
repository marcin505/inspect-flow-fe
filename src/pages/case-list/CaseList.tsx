import { useEffect, useState } from "react";

import { Layout } from "~/components/layout/Layout";
import {
  FlexVertical,
  FullHeightRoundContainer,
  HeadingLarge,
} from "~/components/utils-components/UtilsComponents";
import ReportsTable from "../case-creation/ReportsTable";
import { Report } from "../case-creation/types";
import { baseURL, genericFetch } from "@utils/utils";
import { InnerContainer } from "../case-creation/CaseCreation.styled";
import { PageHeader } from "~/components/PageHeader/PageHeader";
import { Spinner } from "~/components/spinner/Spinner";

export const CaseList = () => {
  const [reports, setReports] = useState<Report[] | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchList = () => {
    (async () => {
      const newReports = await genericFetch<Report[]>({
        url: `${baseURL}/reports`,
      });
      console.log({ newReports });

      setReports(newReports);
      setLoading(false);
    })();
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <Layout padding={20}>
      <FlexVertical $fullWidth>
        <FullHeightRoundContainer>
          <PageHeader backURL="/case-creation" title="Back to case creation" />
          <InnerContainer>
            <FlexVertical>
              <HeadingLarge $fontWeight={700}>Case list</HeadingLarge>
            </FlexVertical>
            {loading ? (
              <Spinner />
            ) : (
              <ReportsTable reports={reports} refetchList={fetchList} />
            )}
          </InnerContainer>
        </FullHeightRoundContainer>
      </FlexVertical>
    </Layout>
  );
};

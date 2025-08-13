import { CountContainer, Tab as StyledTab, TabsContainer } from "./Tabs.styled";

export interface Tab {
  id: string;
  label: string;
  count?: number;
}

interface TabsProps {
  tabsList: Tab[];
  selectedTabId: string;
  onTabSelect: (tabId: string) => () => void;
}

export const Tabs = ({ tabsList, selectedTabId, onTabSelect }: TabsProps) => {
  return (
    <TabsContainer>
      {tabsList.map(({ id, label, count }) => (
        <StyledTab
          $selected={selectedTabId === id}
          onClick={onTabSelect(id)}
          key={id}
        >
          <span>{label}</span>
          {Number.isFinite(count) && <CountContainer>{count}</CountContainer>}
        </StyledTab>
      ))}
    </TabsContainer>
  );
};

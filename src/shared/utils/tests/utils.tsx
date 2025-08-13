import { useLocation } from "react-router";
import { screen } from "@testing-library/react";

export const LocationTestIds = {
  pathname: "location-pathname",
  search: "location-search",
};

export const LocationComponent = () => {
  const { pathname, search } = useLocation();
  return (
    <>
      <span data-testid={LocationTestIds.pathname}>{pathname}</span>
      <span data-testid={LocationTestIds.search}>
        {decodeURIComponent(search)}
      </span>
    </>
  );
};

export const getTableRows = () =>
  screen.getByRole("table").querySelector("tbody")?.querySelectorAll("tr") ??
  [];

export const getTableCells = (row: HTMLElement) => row.querySelectorAll("td");

export class ResizeObserverMock {
  observe() {
    // This is intentional
  }

  unobserve() {
    // This is intentional
  }

  disconnect() {
    // This is intentional
  }
}

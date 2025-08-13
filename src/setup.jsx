import matchers from "@testing-library/jest-dom/matchers";
import { vi } from "vitest";
import "jest-styled-components";

import { server } from "./shared/utils/mocking/server";

expect.extend(matchers);

vi.mock("@ui/components/Layout", () => ({
  default: ({ children }) => <div id="layout">{children}</div>,
}));

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
  global.scrollTo = () => {};
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

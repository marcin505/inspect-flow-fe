import { version } from "../../package.json";

type ConfigKey =
  | "APP_BASE_URL"
  | "API_BASE_URL"
  | "CLIENT_ID"
  | "TENANT"
  | "PRIVILIGED_GROUP_ID";

export type Config = Record<ConfigKey, string>;

export const config: Config = {
  APP_BASE_URL: import.meta.env.VITE_APP_BASE_URL,
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  CLIENT_ID: import.meta.env.VITE_CLIENT_ID,
  TENANT: import.meta.env.VITE_TENANT,
  PRIVILIGED_GROUP_ID: import.meta.env.VITE_PRIVILIGED_GROUP_ID,
};

console.log("DEV:", import.meta.env.DEV);
console.log("Version:", version);

import { AxiosError } from "axios";
import { ToastOptions } from "react-toastify";
import { format } from "date-fns";
import { faker } from "@faker-js/faker";

import { DamageDropdownOption } from "~/pages/case-creation/types";

export const isNumberEven = (value: number) => value % 2 === 0;

export const getDateWithOffset = (daysOffset: number) => {
  const daysInMilliseconds = daysOffset * 24 * 60 * 60 * 1000;
  return new Date(Date.now() + daysInMilliseconds);
};

export const checkIfNumber = ({
  count,
}: {
  count: undefined | null | number | string;
}): boolean => typeof count === "number" && !isNaN(count);

export const noop = () => {};

export const getFileExtension = (fileName: string) => fileName.split(".").pop();

export const getFileSize = (size: number) => {
  const sizeInBytes = size; // Get the size from the File's size property
  const sizeInKB = sizeInBytes / 1024; // Convert size to KB

  // Check if the size is greater than 1MB (1MB = 1024KB)
  if (sizeInKB >= 1024) {
    const sizeInMB = sizeInKB / 1024; // Convert to MB
    return `${sizeInMB.toFixed(2)} MB`; // Return size in MB with one decimal place
  } else {
    return `${sizeInKB.toFixed(0)} KB`; // Return size in KB with two decimal places
  }
};

export const DEFAULT_PAGE_SIZE = 50;

export const emptyMessage2 = "NA";
export const emptyMessage3 = "Missing Info";

export const isISOString = (str: string | null): boolean => {
  if (str === null) return false;

  const isoRegex =
    /^\d{4}-\d{2}-\d{2}[T\s]\d{2}:\d{2}:\d{2}(?:\.\d{1,6})?(Z|[+-]\d{2}:\d{2})?$/;

  // First, check if the string matches the ISO format
  if (!isoRegex.test(str)) {
    return false;
  }

  // Try parsing the string as a Date
  const date = new Date(str);

  // Check if the parsed date is valid (i.e., not "Invalid Date")
  return date instanceof Date && !isNaN(date.getTime());
};

export const formatDate = ({
  value,
  exactTime,
}: {
  value: string | null;
  exactTime?: boolean;
}) =>
  value && isISOString(value)
    ? format(new Date(value), exactTime ? "dd/MM/yyyy HH:mm" : "dd/MM/yyyy")
    : value;

export const fakeFormattedDate = formatDate({
  value: faker.date.past().toISOString(),
});

export const capitalizeWords = (sentence: string | null): string | null => {
  return sentence
    ? sentence
        .split(" ")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ")
    : null;
};

export function formatJson(jsonString: string) {
  // Correctly split the concatenated JSON objects
  const jsonEntries = jsonString.trim().split("\n");

  // Rebuild the array of JSON objects and ensure each is valid
  const wrappedEntries = `[${jsonEntries.join(",")}]`;

  try {
    // Parse the reconstructed JSON array
    const parsedJson = JSON.parse(wrappedEntries);

    // Stringify the parsed JSON with formatting (2 spaces indentation)
    return JSON.parse(JSON.stringify(parsedJson, null, 2));
  } catch (error) {
    console.error("Invalid JSON string", error);
    return null;
  }
}

export function convertToISOString(dateString: string): string {
  const formattedDateString = dateString.replace(" ", "T");
  const isoString = new Date(formattedDateString).toISOString();

  return isoString;
}

export const getPageCount = (total: number, pageSize: number) =>
  total < pageSize ? 1 : Math.ceil(total / pageSize);

export const toastOptions: Partial<ToastOptions> = {
  autoClose: 5000,
};

export const getInitials = ({
  userName,
}: {
  userName: string | undefined;
}): string | null => {
  const initialsArray =
    userName && userName?.length > 0 ? userName?.split(" ") : null;
  return initialsArray && initialsArray?.length === 2
    ? `${initialsArray[0].slice(0, 1)}${initialsArray[1].slice(0, 1)}`
    : null;
};

export function encodeFileToBase64(file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        // reader.result is a data URL like "data:<mime-type>;base64,<data>"

        // Extract the base64 part after the comma

        const base64String = reader.result.split(",")[1];

        resolve(base64String);
      } else {
        reject(new Error("Unexpected result type"));
      }
    };

    reader.onerror = () => {
      reject(new Error("File reading failed"));
    };

    reader.readAsDataURL(file);
  });
}

export const damageOptions: DamageDropdownOption[] = [
  { id: "Bumper Damage", label: "Bumper Damage" },
  { id: "Bumps and Dents", label: "Bumps and Dents" },
  { id: "Chipped Paint", label: "Chipped Paint" },
  {
    id: "Cracked or Broken Windshields",
    label: "Cracked or Broken Windshields",
  },
  { id: "Rust or Corrosion", label: "Rust or Corrosion" },
  { id: "Scratches", label: "Scratches" },
  { id: "Tire and Wheel Damage", label: "Tire and Wheel Damage" },
];

type GenericFetch = <T>({
  url,
  method,
}: {
  url: string;
  method?: "GET" | "POST" | "DELETE";
  signal?: AbortSignal;
  body?: string;
}) => Promise<T>;

export const genericFetch: GenericFetch = ({
  url,
  method = "GET",
  signal,
  body,
}) =>
  fetch(url, {
    method,
    signal,
    body,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      return response.text().then((text) => {
        throw new Error(`Fetch error ${response.status}: ${text}`);
      });
    }
    if (method === "DELETE") return null;
    return response.json();
  });

export const baseURL = "http://10.242.30.23:8000";

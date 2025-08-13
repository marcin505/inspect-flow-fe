import { getFileExtension } from "@utils/utils";

export const passwordDisclaimer =
  "Password protected files cannot be processed, so please remove the encryption before uploading";

export const allowedFiles = ["jpg", "png"];

export const allowedFilesText = allowedFiles.reduce(
  (acc, cur, index) => `${index === 1 ? "." : ""}${acc}, .${cur}`
);

export const maxFilesCount = 10;

export const fileWarning =
  "Please make sure that the document is not above the size limits & not encrypted";

export const caseCreationStartWarning =
  "File Upload Initialization failed, please try again later";

export const caseCreationEndWarning =
  "File Upload finilization failed, please try again later";

export const wrongFileWarning = (
  <span>
    Some of the files you selected have not been added to your upload selection.
    <br />
    Please select a supported file format with a maximum size of 25MB.
  </span>
);

const twentyFiveMB = 25 * 1024 * 1024;

export const getIsFileValid = (file: File): boolean =>
  file.size < twentyFiveMB &&
  allowedFiles.includes(getFileExtension(file.name) ?? "");

export const passwordVerificationHeading =
  "Some of the uploaded files are password protected. Do you still wish to create the case?";

export type Priority = "high" | "low" | null;
export type FileStage = "selected" | "loading" | "error" | "success";

export interface FileObject {
  file: File;
  stage: FileStage;
}

export interface CaseCreationData {
  caseId: string;
}

export interface DocUploadData {
  fileName: string;
}

export interface CaseFile {
  fileName: string;
  passwordProtected: boolean;
  caseId: string;
}

export interface CaseFilesData {
  ready: boolean;
  files: CaseFile[];
}

export interface CaseFilesStartData {
  message: string;
}

export type UploadModalState = Exclude<FileStage, "selected"> | null;

export type Damage =
  | "Scratches"
  | "Bumps and Dents"
  | "Chipped Paint"
  | "Cracked or Broken Windshields"
  | "Bumper Damage"
  | "Rust or Corrosion"
  | "Tire and Wheel Damage";

/** Shape of the case creation payload */
export interface CaseCreation {
  username: string;
  description: string;
  vehicle: string;
  image: string; // base64-encoded image string
  damage: Damage[];
}

export interface DamageDropdownOption {
  id: Damage;
  label: Damage;
}

export interface CaseCreationResponse {
  reportId: number;
  message: string;
}

export interface Report {
  reportId: number;
  username: string;
  vehicle: string;
  createdAt: string;
}

export interface ReportDetail {
  reportId: number;
  username: string;
  vehicle: string;
  createdAt: string;
  description: string;
  image: string;
  damage: string[];
}

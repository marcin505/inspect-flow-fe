import { useCallback, useMemo } from "react";

import { FileIcon } from "@ui/icons";
import {
  Container,
  Extension,
  FileExtensionSpan,
  FileInfo,
  FileName,
  FileSize,
} from "./FileTile.styled";

import { getFileExtension, getFileSize } from "@utils/utils";
import { FileObject, FileStage } from "../../types";

export interface FileTileProps {
  file: FileObject;
  fileStage: FileStage;
  isModalTile?: boolean;
}

export const FileTile = ({ file }: FileTileProps) => {
  return (
    <Container key={file.file.name} $isError={file.stage === "error"}>
      <Extension>
        <FileIcon />
        <FileExtensionSpan>
          {getFileExtension(file.file.name)}
        </FileExtensionSpan>
      </Extension>
      <FileInfo>
        <FileName title={file.file.name}>{file.file.name}</FileName>
        <FileSize>{getFileSize(file.file.size)}</FileSize>
      </FileInfo>
    </Container>
  );
};

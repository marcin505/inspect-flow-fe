import { FC, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Disclaimer, InnerContainer } from "../../CaseCreation.styled";
import {
  ButtonsContainer,
  FlexVertical,
  FullHeightRoundContainer,
  HeadingLarge,
  SubHeading,
} from "~/components/utils-components/UtilsComponents";
import { Button } from "~/components/button";
import {
  getIsFileValid,
  maxFilesCount,
  passwordDisclaimer,
  wrongFileWarning,
} from "../utils";
import { SelectedFilesList } from "../selected-files-list/SelectedFilesList";
import { FileSelectBox } from "../file-select-box/FileSelectBox";
import { FileObject } from "../../types";
import { toastOptions } from "@utils/utils";

interface FilesSelectionStepProps {
  selectedFiles: FileObject[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<FileObject[]>>;
}

export const FilesSelectionStep: FC<FilesSelectionStepProps> = ({
  selectedFiles,
  setSelectedFiles,
}) => {
  const navigate = useNavigate();

  const onFilesSelect = (files: File[]) => {
    if (!files.length) return;

    const totalCount = files.length + selectedFiles.length;
    let isValidWarning = false;

    if (totalCount > maxFilesCount) {
      toast.warning("You can't upload more than 10 files", toastOptions);
    } else {
      const newSelectedFiles: FileObject[] = files.reduce<FileObject[]>(
        (acc, newFile) => {
          const isAlreadySelected = selectedFiles.some(
            (selectedFile) => selectedFile.file.name === newFile.name
          );

          const isFileValid = getIsFileValid(newFile);

          if (!isValidWarning && !isFileValid) {
            isValidWarning = true;
            toast.warning(wrongFileWarning, { autoClose: 10000 });
          }

          return isAlreadySelected || !isFileValid
            ? acc
            : [...acc, { file: newFile, stage: "selected" }];
        },
        []
      );
      setSelectedFiles((files) => [...files, ...newSelectedFiles]);
    }
  };

  const isSelectedFiles = useMemo(
    () => Boolean(selectedFiles.length),
    [selectedFiles.length]
  );

  return (
    <div style={{ marginBottom: 16 }}>
      <FileSelectBox onChange={onFilesSelect} />

      {isSelectedFiles && <SelectedFilesList selectedFiles={selectedFiles} />}
    </div>
  );
};

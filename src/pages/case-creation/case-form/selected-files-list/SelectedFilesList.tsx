import { SubHeading } from "~/components/utils-components/UtilsComponents";
import { FileObject } from "../../types";
import { FileTile } from "../file-tile/FileTile";
import { FilesContainer } from "./SelectedFilesList.styled";

export const SelectedFilesList = ({
  selectedFiles,
}: {
  selectedFiles: FileObject[];
}) => {
  return (
    <>
      <SubHeading $marginBottom={18}>Selected documents</SubHeading>
      <FilesContainer>
        {selectedFiles.map((file) => (
          <FileTile file={file} fileStage={file.stage} key={file.file.name} />
        ))}
      </FilesContainer>
    </>
  );
};

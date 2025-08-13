import { useRef } from "react";

import {
  Container,
  SomeTextHolder,
  SubContainer,
} from "./FileSelectBox.styled";
import {
  HeadingSmall,
  SpanSmall,
} from "~/components/utils-components/UtilsComponents";
import { Button } from "~/components/button";
import { allowedFilesText } from "../utils";
import { encodeFileToBase64 } from "@utils/utils";

interface FileSelectBoxProps {
  onChange: (files: File[]) => void;
}

export const FileSelectBox = ({ onChange }: FileSelectBoxProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically click the input element
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the selected files as a FileList object
    const files: FileList | null = event.target.files;
    console.log(files);

    const file = files && encodeFileToBase64(files[0]);

    console.log(file);

    if (files) {
      const filesArray = Array.from(files);
      onChange(filesArray);
      event.target.value = "";
    }
  };

  return (
    <Container>
      <SubContainer>
        <SomeTextHolder>
          <HeadingSmall>Attach damage photo</HeadingSmall>
          <SpanSmall>
            Only {allowedFilesText.toUpperCase()} formats are supported
          </SpanSmall>
        </SomeTextHolder>
        <SpanSmall>
          Max file size <b>25MB | </b>Max <b>1</b> attachment
        </SpanSmall>
      </SubContainer>
      <Button kind="secondary" onClick={openFileDialog}>
        <span>Select file</span>
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the file input
        accept={allowedFilesText}
        aria-label="file input"
      />
    </Container>
  );
};

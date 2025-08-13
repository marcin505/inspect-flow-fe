import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Layout } from "~/components/layout/Layout";
import {
  CaseCreationResponse,
  DamageDropdownOption,
  FileObject,
} from "./types";
import {
  ButtonsContainer,
  FlexVertical,
  FullHeightRoundContainer,
  HeadingLarge,
  InputHeading,
  SubHeading,
} from "~/components/utils-components/UtilsComponents";
import { InnerContainer } from "./CaseCreation.styled";
import { TextInput } from "~/components/text-input/TextInput.styled";
import { Button } from "~/components/button";
import { DropdownOption, Select } from "~/components/select/Select";
import {
  baseURL,
  damageOptions,
  encodeFileToBase64,
  genericFetch,
} from "@utils/utils";
import { PageHeader } from "~/components/PageHeader/PageHeader";
import { FilesSelectionStep } from "./case-form/files-selection-step/FilesSelectionStep";

export const CaseCreation = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileObject[]>([]);
  const [damage, setDamage] = useState<DamageDropdownOption>(damageOptions[0]);
  const [username, setUsername] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [vehicle, setVehicle] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const onDamageChange = (option: DropdownOption | null) => {
    setDamage(option as DamageDropdownOption);
  };

  useEffect(() => {
    console.log(selectedFiles[0]);
    const selectedItem = selectedFiles[0];
    if (selectedItem) {
      (async () => {
        const newImage = await encodeFileToBase64(selectedItem.file);
        setImage(newImage);
      })();
    }
  }, [selectedFiles]);

  useEffect(() => {
    console.log({ image });
  }, [image]);

  const onUsername = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(value);
  };

  const onDescription = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(value);
  };

  const onVehicle = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setVehicle(value);
  };

  const onSubmit = () => {
    try {
      (async () => {
        await genericFetch<CaseCreationResponse>({
          url: `${baseURL}/reports`,
          method: "POST",
          body: JSON.stringify({
            damage: [damage.id],
            username,
            description,
            vehicle,
            image,
          }),
        });
        toast.success("Case has been created");
      })();
    } catch (error) {}
  };

  return (
    <Layout>
      <FullHeightRoundContainer>
        <PageHeader backURL="/case-list" />
        <InnerContainer>
          <FlexVertical>
            <HeadingLarge $fontWeight={700}>Start inspection</HeadingLarge>
            <SubHeading $marginBottom={0} $marginTop={18}>
              Please attach all the relevant documents of your case
            </SubHeading>
          </FlexVertical>

          <FilesSelectionStep
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
          />

          <InputHeading>User Name</InputHeading>
          <TextInput onChange={onUsername} />

          <InputHeading>Description</InputHeading>
          <TextInput onChange={onDescription} />

          <InputHeading>Vehicle</InputHeading>
          <TextInput onChange={onVehicle} />

          <InputHeading>Damage Type</InputHeading>
          <Select
            options={damageOptions}
            onChange={onDamageChange}
            value={damage}
          />
        </InnerContainer>
        <ButtonsContainer $justifyContent="flex-end">
          <Button onClick={onSubmit}>Submit</Button>
        </ButtonsContainer>
      </FullHeightRoundContainer>
    </Layout>
  );
};

import { Listbox } from "@headlessui/react";
import styled from "styled-components";

import {
  Button,
  CheckmarkContainer,
  DropdownWrapper,
  SelectContainer,
  SelectOption,
  SelectOptions,
} from "./Select.styled";
import { CheckmarkIcon, ChevronDownIcon, ChevronUpIcon } from "@ui/icons";
import { InputWarning } from "../utils-components/UtilsComponents";

export const Icon = styled.span`
  font-size: 10px;
`;

export interface DropdownOption {
  id: string;
  label: string;
}

export interface SelectProps {
  options: DropdownOption[];
  value: DropdownOption | null;
  onChange: (value: DropdownOption | null) => void;
  disabled?: boolean;
  placeholder?: string;
  minWidth?: number;
  topOffset?: number;
  warning?: string;
}

export const Select = ({
  options,
  value,
  onChange,
  disabled,
  placeholder = "Select an option",
  minWidth,
  topOffset,
  warning,
}: SelectProps) => {
  const handleSelect = (option: DropdownOption) => {
    onChange(option);
  };

  return (
    <SelectContainer>
      <DropdownWrapper $minWidth={minWidth}>
        <Listbox value={value} onChange={handleSelect} disabled={disabled}>
          {({ open }) => (
            <>
              <Listbox.Button as={Button}>
                {value?.label ?? placeholder}
                <Icon>{open ? <ChevronUpIcon /> : <ChevronDownIcon />}</Icon>
              </Listbox.Button>
              {open && (
                <Listbox.Options as={SelectOptions} $topOffset={topOffset}>
                  {options.map((option) => (
                    <Listbox.Option key={option.id} value={option} as="div">
                      {({ active }) => (
                        <SelectOption $active={active}>
                          <CheckmarkContainer>
                            {value?.id === option.id && <CheckmarkIcon />}
                          </CheckmarkContainer>
                          {option.label}
                        </SelectOption>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              )}
            </>
          )}
        </Listbox>
      </DropdownWrapper>
      {warning && <InputWarning>{warning}</InputWarning>}
    </SelectContainer>
  );
};

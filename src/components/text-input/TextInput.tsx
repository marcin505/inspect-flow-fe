import { forwardRef, useCallback } from "react";

import * as Styled from "./TextInput.styled";
import { HeadingSmall } from "../utils-components/UtilsComponents";

export interface TextInputProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}
export const TextInput = forwardRef(
  (
    { value, onChange, placeholder, label }: TextInputProps,
    ref?: React.Ref<HTMLInputElement>
  ) => {
    const handleTextInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      },
      [onChange]
    );

    return (
      <Styled.Container>
        {Boolean(label) && <HeadingSmall>{label}</HeadingSmall>}
        <Styled.TextInput
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleTextInputChange}
          ref={ref}
        />
      </Styled.Container>
    );
  }
);

TextInput.displayName = "TextInput";

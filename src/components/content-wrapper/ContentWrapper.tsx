import { useRef } from "react";

import * as Styled from "./ContentWrapper.styled";
import { FlexVertical } from "../utils-components/UtilsComponents";
import { Nullable } from "~/types";

interface OrderCreateWrapperProps {
  children?: React.ReactNode;
  headingTitle: string;
  description?: string;
}

export const ContentWrapper = ({
  children,
  headingTitle,
  description,
}: OrderCreateWrapperProps) => {
  const h1Ref = useRef<Nullable<HTMLHeadingElement>>(null);

  return (
    <FlexVertical>
      <Styled.HeadingWrapper>
        <Styled.H1 ref={h1Ref}>{headingTitle}</Styled.H1>
        {description && <Styled.Description>{description}</Styled.Description>}
      </Styled.HeadingWrapper>
      {children}
    </FlexVertical>
  );
};

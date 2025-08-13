import { useNavigate } from "react-router";

import { BackButton, Circle, TopContainer } from "./PageHeader.styled";
import { BackArrowIcon } from "@ui/icons";

interface PageHeaderProps {
  backURL?: string;
  title?: string;
}

export const PageHeader = ({
  backURL,
  title = "Back to list",
}: PageHeaderProps) => {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    if (backURL) {
      navigate(backURL);
    }
  };

  return (
    <TopContainer>
      {backURL && (
        <BackButton onClick={onBackButtonClick}>
          <Circle>
            <BackArrowIcon />
          </Circle>
          <span>{title}</span>
        </BackButton>
      )}
    </TopContainer>
  );
};

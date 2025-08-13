import { useNavigate } from "react-router";

import { Container, Subtitle, Title } from "./NoSearchResults.styled";
import { Button } from "../button/Button";

interface NoSearchResultsParams {
  title: string;
  subtitle: string;
  buttonURL?: string;
  buttonTitle?: string;
}

export const NoSearchResults = ({
  title,
  subtitle,
  buttonURL,
  buttonTitle,
}: NoSearchResultsParams) => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    if (buttonURL) {
      navigate(buttonURL);
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {buttonURL && buttonTitle && (
        <Button onClick={onButtonClick}>{buttonTitle}</Button>
      )}
    </Container>
  );
};

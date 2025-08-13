import { ExclamationMarkIcon, TickIcon } from "@ui/icons";
import { Circle, Container } from "./MessageStrip.styled";

export type MessageStripType = "success" | "fail";

export const MessageStrip = ({
  message,
  type = "success",
  marginTop,
  marginBottom,
}: {
  type?: MessageStripType;
  message: string;
  marginTop?: number;
  marginBottom?: number;
}) => (
  <Container $type={type} $marginTop={marginTop} $marginBottom={marginBottom}>
    <Circle>
      {type === "success" ? <TickIcon /> : <ExclamationMarkIcon />}
    </Circle>
    <span>{message}</span>
  </Container>
);

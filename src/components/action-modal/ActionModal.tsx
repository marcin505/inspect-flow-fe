import { ReactElement } from "react";

import { Button } from "../button";
import { MessageStrip, MessageStripType } from "../message-strip/MessageStrip";
import {
  ButtonsContainer,
  PageHeading,
} from "../utils-components/UtilsComponents";
import { ActionModalContainer, MessageContainer } from "./ActionModal.styled";
import { ButtonKind } from "../button/Button.styled";
import { Modal } from "../modal";
import { Spinner } from "../spinner/Spinner";

interface Action {
  label: string;
  onClick: () => void;
  buttonKind: ButtonKind;
  icon?: ReactElement;
}

interface MessageStripProp {
  type: MessageStripType;
  message: string;
}
export interface ActionModalProps {
  heading: string | null;
  message: string | ReactElement | null;
  cancelAction?: Action;
  confirmAction?: Action;
  messageStrip?: MessageStripProp;
  modalCloseHandler: () => void;
  isLoading?: boolean;
  loadingMessage?: string;
}

export function ActionModalContent({
  heading,
  message,
  cancelAction,
  confirmAction,
  messageStrip,
  isLoading,
  loadingMessage,
}: ActionModalProps) {
  if (isLoading && loadingMessage) {
    return (
      <>
        <PageHeading $marginBottom={90}>{loadingMessage}</PageHeading>
        <Spinner />
      </>
    );
  }
  return (
    <>
      {messageStrip && (
        <MessageStrip
          message={messageStrip.message}
          type={messageStrip.type}
          marginBottom={28}
        />
      )}
      <PageHeading $marginBottom={20}>{heading}</PageHeading>
      <MessageContainer>{message}</MessageContainer>
      <ButtonsContainer $justifyContent="center" $marginTop={36}>
        {cancelAction && (
          <ButtonWrapper
            onClick={cancelAction.onClick}
            buttonKind={cancelAction.buttonKind}
            label={cancelAction.label}
            icon={cancelAction.icon}
          />
        )}
        {confirmAction && (
          <ButtonWrapper
            onClick={confirmAction.onClick}
            buttonKind={confirmAction.buttonKind}
            label={confirmAction.label}
            icon={confirmAction.icon}
          />
        )}
      </ButtonsContainer>
    </>
  );
}

export const ActionModal = (props: ActionModalProps) => {
  return (
    <Modal isOpen close={props.modalCloseHandler} isClickOutside>
      <ActionModalContainer>
        <ActionModalContent {...props} />
      </ActionModalContainer>
    </Modal>
  );
};

function ButtonWrapper({ buttonKind, label, onClick, icon }: Action) {
  return (
    <Button kind={buttonKind} onClick={onClick}>
      {icon}
      <span>{label}</span>
    </Button>
  );
}

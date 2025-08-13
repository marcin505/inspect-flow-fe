import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FocusTrap } from "@headlessui/react";

import { Backdrop, ModalContainer } from "./Modal.styled";

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
  isClickOutside?: boolean;
}

export const Modal = ({
  isOpen,
  close,
  children,
  isClickOutside = false,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      close();
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      close();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = "19px";

      if (isClickOutside) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.body.style.overflowY = "auto";
        document.body.style.paddingRight = "0";

        if (isClickOutside) {
          document.removeEventListener("mousedown", handleClickOutside);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <FocusTrap onKeyDown={handleKeyDown}>
      <Backdrop>
        <ModalContainer ref={modalRef}>{children}</ModalContainer>
      </Backdrop>
    </FocusTrap>,
    document.body
  );
};

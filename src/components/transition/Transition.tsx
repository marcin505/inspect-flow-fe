import { Fragment, ReactNode } from "react";
import {
  Transition as TranistionHeadless,
  TransitionClasses,
} from "@headlessui/react";

type TransitionProps = {
  children: ReactNode;
  show?: boolean;
} & TransitionClasses;

export const Transition = ({
  children,
  enter = "transition ease-out duration-100",
  enterFrom = "transform opacity-0 scale-95",
  enterTo = "transform opacity-100 scale-100",
  leave = "transition ease-in duration-75",
  leaveFrom = "transform opacity-100 scale-100",
  leaveTo = "transform opacity-0 scale-95",
  show,
}: TransitionProps) => (
  <TranistionHeadless
    as={Fragment}
    enter={enter}
    enterFrom={enterFrom}
    enterTo={enterTo}
    leave={leave}
    leaveFrom={leaveFrom}
    leaveTo={leaveTo}
    show={show}
  >
    {children}
  </TranistionHeadless>
);

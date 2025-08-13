import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4); /* Slight dark overlay */
  backdrop-filter: blur(2px);
`;

export const ModalContainer = styled.div`
  min-width: 240px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  border: 1px solid #d1d5db; /* Equivalent to gray border */
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

export const SpinnerContainer = styled.div`
  margin-top: 64px;
`;

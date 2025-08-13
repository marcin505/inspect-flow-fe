import styled, { css } from "styled-components";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  padding?: number;
  gap?: number;
}

export const Container = styled.div<{ $padding: number; $gap: number }>`
  ${({ $padding, $gap }) => css`
    display: flex;
    flex-direction: column;
    padding: ${$padding}px;
    gap: ${$gap}px;
    flex-grow: 1;
  `}
`;
export const layoutPadding = 20;

export const Layout = ({
  children,
  padding = layoutPadding,
  gap = 20,
}: LayoutProps) => {
  return (
    <Container $padding={padding} $gap={gap}>
      {children}
    </Container>
  );
};

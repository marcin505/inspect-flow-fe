import * as Styled from "./Button.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  kind?: Styled.ButtonKind;
  isFullWidth?: boolean;
  disabled?: boolean;
}

export const Button = ({
  children,
  kind = "primary",
  isFullWidth = false,
  disabled = false,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <Styled.Button
      onClick={onClick}
      $kind={kind}
      $isFullWidth={isFullWidth}
      $disabled={disabled}
      {...props}
    >
      {children}
    </Styled.Button>
  );
};

import { IconProps } from "./types";

export const ChevronLeftIcon = ({
  className,
  color = "#000000",
}: IconProps) => {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8536 18.8549C17.6583 19.0502 17.3417 19.0502 17.1464 18.8549L12.7934 14.5L17.1464 10.1463C17.3417 9.95106 17.6583 9.95106 17.8536 10.1463C18.0488 10.3416 18.0488 10.6582 17.8536 10.8534L14.2076 14.5L17.8536 18.1478C18.0488 18.3431 18.0488 18.6596 17.8536 18.8549Z"
        fill={color}
      />
    </svg>
  );
};

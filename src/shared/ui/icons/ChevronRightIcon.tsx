import { IconProps } from "./types";

export const ChevronRightIcon = ({
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
        d="M12.1464 11.1451C12.3417 10.9498 12.6583 10.9498 12.8536 11.1451L17.2066 15.5L12.8536 19.8537C12.6583 20.0489 12.3417 20.0489 12.1464 19.8537C11.9512 19.6584 11.9512 19.3418 12.1464 19.1466L15.7924 15.5L12.1464 11.8522C11.9512 11.6569 11.9512 11.3404 12.1464 11.1451Z"
        fill={color}
      />
    </svg>
  );
};

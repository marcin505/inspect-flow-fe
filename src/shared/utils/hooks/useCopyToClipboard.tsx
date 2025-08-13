import { toast } from "react-toastify";

import { toastOptions } from "@utils/utils";

type UseCopyToClipboard = ({
  stringToCopy,
}: {
  stringToCopy: string | null;
}) => {
  copyToClipboard: () => void;
};

export const useCopyToClipboard: UseCopyToClipboard = ({ stringToCopy }) => {
  const copyToClipboard = () => {
    (async () => {
      try {
        if (stringToCopy) {
          toast.success(
            "Case Summary has been successfully copied to the clipboard",
            toastOptions
          );
          await navigator.clipboard.writeText(stringToCopy);
        }
      } catch (err) {
        console.warn(err);
      }
    })();
  };
  return { copyToClipboard };
};

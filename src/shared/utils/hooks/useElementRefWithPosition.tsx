import { useMemo, useState } from "react";
import { useCallbackRef } from "use-callback-ref";

export type PositionType = "center" | "left" | "right";

const getStyle = {
  center: (width: number) => ({ left: `calc(50% - ${width / 2}px)` }),
  left: () => ({ left: "0px" }),
  right: () => ({ right: "0px" }),
};

export const useElementRefWithPosition = <T extends HTMLElement>(
  position: PositionType
) => {
  const [refElementWidth, setRefElementWidth] = useState<number>(0);
  const ref = useCallbackRef<T | null>(null, (value) => {
    setRefElementWidth(value?.clientWidth ?? 0);
  });
  const style = useMemo(
    () => getStyle[position](refElementWidth),
    [position, refElementWidth]
  );

  return { ref, style };
};

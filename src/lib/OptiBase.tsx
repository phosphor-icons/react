import { forwardRef, ReactElement } from "react";
import { IconProps } from "./types";

type IconBaseProps = Omit<IconProps, "weight">;

const OptiBase = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
  const {
    alt,
    color = "currentColor",
    size = "1em",
    mirrored = false,
    children,
    ...restProps
  } = props;

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 256 256"
      transform={mirrored ? "scale(-1, 1)" : undefined}
      {...restProps}
    >
      {!!alt && <title>{alt}</title>}
      {children}
    </svg>
  );
});

OptiBase.displayName = "OptiBase";

export default OptiBase;

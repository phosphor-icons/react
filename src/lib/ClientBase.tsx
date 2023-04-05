"use client";
import { forwardRef, useContext } from "react";
import { IconContext } from "./context";
import { IconBaseProps } from "./types";

const ClientBase = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
  const {
    alt,
    color,
    size,
    weight,
    mirrored,
    children,
    weights,
    ...restProps
  } = props;

  const {
    color: contextColor = "currentColor",
    size: contextSize,
    weight: contextWeight = "regular",
    mirrored: contextMirrored = false,
    ...restContext
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...restContext}
      {...restProps}
    >
      {!!alt && <title>{alt}</title>}
      {children}
      {weights.get(weight ?? contextWeight)}
    </svg>
  );
});

export default ClientBase;

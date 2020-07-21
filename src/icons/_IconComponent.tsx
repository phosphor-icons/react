import React, { forwardRef } from "react";
import { IconProps } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "thin":
      return (
        thin
      );

    case "light":
      return (
        light
      );

    case "regular":
      return (
        regular
      );

    case "bold":
      return (
        bold
      );

    case "fill":
      return (
        fill
      );

    case "duotone":
      return (
        duotone
      );

    default:
      console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
      return null;
  }
}

const name = forwardRef<SVGSVGElement, IconProps>(
  (
    { color = "currentColor", size = "1.25em", weight = "regular", ...rest },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        stroke={color}
        {...rest}
      >
        {renderPathFor(weight, color)}
      </svg>
    );
  }
);


name.displayName = "name";

export default name;
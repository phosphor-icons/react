import React, { forwardRef } from "react";
import { IconProps } from "../lib";

const XXX = forwardRef<SVGSVGElement, IconProps>(
  (
    { color = "currentColor", size = "1.25em", weight = "regular", ...rest },
    ref
  ) => {
    switch (weight) {
      case "thin":
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
          ></svg>
        );

      case "light":
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
          ></svg>
        );

      case "regular":
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
          ></svg>
        );
      case "bold":
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
          ></svg>
        );

      case "fill":
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
          ></svg>
        );

      case "duotone":
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
          ></svg>
        );

      default:
        throw new Error(
          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
        );
    }
  }
);

XXX.displayName = "XXX";

export default XXX;

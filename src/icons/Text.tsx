/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line
            x1="127.99414"
            y1="55.99512"
            x2="127.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="47.994 87.995 47.994 55.995 207.994 55.995 207.994 87.995"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="95.99414"
            y1="199.99512"
            x2="159.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <line
            x1="127.99414"
            y1="55.99512"
            x2="127.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="47.994 87.995 47.994 55.995 207.994 55.995 207.994 87.995"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="95.99414"
            y1="199.99512"
            x2="159.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M207.99414,47.99512h-160a8.00008,8.00008,0,0,0-8,8v32a8,8,0,0,0,16,0v-24h64v128h-24a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16h-24v-128h64v24a8,8,0,1,0,16,0v-32A8.00008,8.00008,0,0,0,207.99414,47.99512Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="127.99414"
            y1="55.99512"
            x2="127.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="47.994 87.995 47.994 55.995 207.994 55.995 207.994 87.995"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="95.99414"
            y1="199.99512"
            x2="159.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
        </>
      );
    case "thin":
      return (
        <>
          <line
            x1="127.99414"
            y1="55.99512"
            x2="127.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="47.994 87.995 47.994 55.995 207.994 55.995 207.994 87.995"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="95.99414"
            y1="199.99512"
            x2="159.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
        </>
      );
    case "regular":
      return (
        <>
          <line
            x1="127.99414"
            y1="55.99512"
            x2="127.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="47.994 87.995 47.994 55.995 207.994 55.995 207.994 87.995"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="95.99414"
            y1="199.99512"
            x2="159.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Text = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, ...rest } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...contextRest
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
      {...contextRest}
      {...rest}
    >
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

Text.displayName = "Text";

export default Text;

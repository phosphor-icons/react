/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle
            cx="128.00049"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="60.11824"
            y1="60.11775"
            x2="195.88274"
            y2="195.88225"
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
          <circle cx="128.00049" cy="128" r="96" opacity="0.2" />
          <circle
            cx="128.00049"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <line
            x1="60.11824"
            y1="60.11775"
            x2="195.88274"
            y2="195.88225"
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
          <g>
            <path d="M56.001,128.00012a71.94351,71.94351,0,0,0,116.90527,56.21973L71.78076,83.09485A71.63816,71.63816,0,0,0,56.001,128.00012Z" />
            <path d="M128.001,56.00012A71.6326,71.6326,0,0,0,83.09521,71.78088l101.12549,101.125A71.94387,71.94387,0,0,0,128.001,56.00012Z" />
            <path d="M128.001,24.00012a104,104,0,1,0,104,104A104.1179,104.1179,0,0,0,128.001,24.00012Zm62.81543,165.5625a8.06328,8.06328,0,0,1-.58985.6626,8.153,8.153,0,0,1-.6626.58984A87.95214,87.95214,0,0,1,65.18115,66.4425a8.08079,8.08079,0,0,1,.59326-.66748,8.17637,8.17637,0,0,1,.66748-.59375A87.95231,87.95231,0,0,1,190.81641,189.56262Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <circle
            cx="128.00049"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="60.11824"
            y1="60.11775"
            x2="195.88274"
            y2="195.88225"
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
          <circle
            cx="128.00049"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="60.11824"
            y1="60.11775"
            x2="195.88274"
            y2="195.88225"
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
          <circle
            cx="128.00049"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <line
            x1="60.11824"
            y1="60.11775"
            x2="195.88274"
            y2="195.88225"
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

const Prohibit = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <rect width="256" height="256" fill="none" />
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

Prohibit.displayName = "Prohibit";

export default Prohibit;

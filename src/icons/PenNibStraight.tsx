/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (
  weight: string,
  color: string
): React.ReactNode | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line
            x1="128.00587"
            y1="156.00342"
            x2="128.00587"
            y2="244.00342"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="128.00587"
            cy="132.00342"
            r="24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M72.00586,72.00342v-40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polygon
            points="72.006 72.003 42.463 131.799 128.006 244.003 213.549 131.799 184.006 72.003 72.006 72.003"
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
          <path
            d="M211.39209,127.43359,184.00586,72.00342h-112L44.61914,127.43408a8.0009,8.0009,0,0,0,.73,8.28662l82.65674,112.28272,82.65625-112.28321A7.99983,7.99983,0,0,0,211.39209,127.43359Zm-83.38623,24.56983a20,20,0,1,1,20-20A19.99974,19.99974,0,0,1,128.00586,152.00342Z"
            opacity="0.2"
          />
          <line
            x1="128.00587"
            y1="152.00342"
            x2="128.00586"
            y2="248.00342"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="128.00587"
            cy="132.00342"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M72.00586,72.00342v-40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M72.00586,72.00342l-27.3866,55.43077a8,8,0,0,0,.72977,8.28632l82.65684,112.28291,82.65647-112.28335a8,8,0,0,0,.72976-8.28628L184.00586,72.00342Z"
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
          <circle cx="128.00586" cy="132.00342" r="16" />
          <path d="M218.56445,123.89014,192.00586,70.13477V32.00342a16,16,0,0,0-16-16h-96a16,16,0,0,0-16,16V70.13477L37.44678,123.89062a15.944,15.944,0,0,0,1.45947,16.57276l73.87832,100.35748a4,4,0,0,0,7.22129-2.37135V162.99072a32,32,0,1,1,16,0v75.45864a4,4,0,0,0,7.2213,2.37133L217.105,140.4624A15.94312,15.94312,0,0,0,218.56445,123.89014ZM176.00586,64.00342h-96v-32h96Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="128.00587"
            y1="152.00342"
            x2="128.00587"
            y2="248.00342"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="128.00587"
            cy="132.00342"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M72.00586,72.00342v-40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M72.00586,72.00342l-27.3866,55.43077a8,8,0,0,0,.72977,8.28632l82.65684,112.28291,82.65647-112.28335a8,8,0,0,0,.72976-8.28628L184.00586,72.00342Z"
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
            x1="128.00587"
            y1="152.00342"
            x2="128.00587"
            y2="248.00342"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="128.00587"
            cy="132.00342"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M72.00586,72.00342v-40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M72.00586,72.00342l-27.3866,55.43077a8,8,0,0,0,.72977,8.28632l82.65684,112.28291,82.65647-112.28335a8,8,0,0,0,.72976-8.28628L184.00586,72.00342Z"
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
            x1="128.00587"
            y1="152.00342"
            x2="128.00587"
            y2="248.00342"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="128.00587"
            cy="132.00342"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M72.00586,72.00342v-40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M72.00586,72.00342l-27.3866,55.43077a8,8,0,0,0,.72977,8.28632l82.65684,112.28291,82.65647-112.28335a8,8,0,0,0,.72976-8.28628L184.00586,72.00342Z"
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

const PenNibStraight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, children, ...restProps } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
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
      {children}
      <rect width="256" height="256" fill="none" />
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

PenNibStraight.displayName = "PenNibStraight";

export default PenNibStraight;

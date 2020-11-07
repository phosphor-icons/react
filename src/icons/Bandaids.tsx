/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M49.37258,94.62742A32,32,0,0,1,94.62742,49.37258l112,112a32,32,0,0,1-45.25484,45.25484Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M161.37258,49.37258a32,32,0,0,1,45.25484,45.25484l-112,112a32,32,0,0,1-45.25484-45.25484Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle cx="128" cy="128" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
          <path
            d="M206.62744,94.62744a32,32,0,0,0-45.25488-45.25488L128,82.74512,173.25488,128Z"
            opacity="0.2"
          />
          <path
            d="M49.37256,161.37256a32,32,0,0,0,45.25488,45.25488L128,173.25488,82.74512,128Z"
            opacity="0.2"
          />
          <path
            d="M94.62744,49.37256A32,32,0,0,0,49.37256,94.62744L82.74512,128,128,82.74512Z"
            opacity="0.2"
          />
          <path
            d="M173.25488,128,128,173.25488l33.37256,33.37256a32,32,0,0,0,45.25488-45.25488Z"
            opacity="0.2"
          />
          <circle cx="128" cy="128" r="12" />
          <path
            d="M49.37258,94.62742A32,32,0,0,1,94.62742,49.37258l112,112a32,32,0,0,1-45.25484,45.25484Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M161.37258,49.37258a32,32,0,0,1,45.25484,45.25484l-112,112a32,32,0,0,1-45.25484-45.25484Z"
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
            <circle cx="128" cy="128" r="12" />
            <path d="M184.56836,128l27.71582-27.71558a40,40,0,1,0-56.56836-56.5686L128,71.43164,100.28418,43.71582a39.99987,39.99987,0,1,0-56.56836,56.56836L71.43164,128,43.71582,155.71558a40,40,0,1,0,56.56836,56.5686L128,184.56836l27.71582,27.71582a39.99987,39.99987,0,1,0,56.56836-56.56836ZM128,94.05957,161.94043,128,128,161.94043,94.05957,128ZM167.03027,55.0293a23.99951,23.99951,0,1,1,33.93946,33.9414L173.25439,116.686,139.314,82.74561ZM88.96973,200.9707a23.99951,23.99951,0,1,1-33.93946-33.9414L82.74561,139.314,116.686,173.25439Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M49.37258,94.62742A32,32,0,0,1,94.62742,49.37258l112,112a32,32,0,0,1-45.25484,45.25484Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M161.37258,49.37258a32,32,0,0,1,45.25484,45.25484l-112,112a32,32,0,0,1-45.25484-45.25484Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle cx="128" cy="128" r="9" />
        </>
      );
    case "thin":
      return (
        <>
          <circle cx="128" cy="128" r="6" />
          <path
            d="M49.37258,94.62742A32,32,0,0,1,94.62742,49.37258l112,112a32,32,0,0,1-45.25484,45.25484Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M161.37258,49.37258a32,32,0,0,1,45.25484,45.25484l-112,112a32,32,0,0,1-45.25484-45.25484Z"
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
          <circle cx="128" cy="128" r="12" />
          <path
            d="M49.37258,94.62742A32,32,0,0,1,94.62742,49.37258l112,112a32,32,0,0,1-45.25484,45.25484Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M161.37258,49.37258a32,32,0,0,1,45.25484,45.25484l-112,112a32,32,0,0,1-45.25484-45.25484Z"
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

const Bandaids = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Bandaids.displayName = "Bandaids";

export default Bandaids;

/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M71.5834,144.00049l-39.58291,32v-128a8,8,0,0,1,8-8h128a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M80.00049,144.00048v40a8,8,0,0,0,8,8h96.41709l39.58291,32v-128a8,8,0,0,0-8-8h-40"
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
            d="M80.00049,144.00048v40a8,8,0,0,0,8,8h96.41709l39.58291,32v-128a8,8,0,0,0-8-8h-40v48a8,8,0,0,1-8,8Z"
            opacity="0.2"
          />
          <path
            d="M71.5834,144.00049l-39.58291,32v-128a8,8,0,0,1,8-8h128a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M80.00049,144.00048v40a8,8,0,0,0,8,8h96.41709l39.58291,32v-128a8,8,0,0,0-8-8h-40"
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
          <path d="M232,96.00049a16.01833,16.01833,0,0,0-16-16H184v-32a16.01833,16.01833,0,0,0-16-16H40a16.01833,16.01833,0,0,0-16,16v128a7.99978,7.99978,0,0,0,13.0293,6.22119L72,153.95032l.001,30.05017a16.01833,16.01833,0,0,0,16,16h93.58789l37.38281,30.22119a7.99979,7.99979,0,0,0,13.0293-6.22119ZM189.44727,185.7793a7.99922,7.99922,0,0,0-5.0293-1.77881H88.001l-.001-32h80a16.01833,16.01833,0,0,0,16-16v-40h32l.001,111.24512Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M71.5834,144.00049l-39.58291,32v-128a8,8,0,0,1,8-8h128a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M80.00049,144.00048v40a8,8,0,0,0,8,8h96.41709l39.58291,32v-128a8,8,0,0,0-8-8h-40"
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
          <path
            d="M71.5834,144.00049l-39.58291,32v-128a8,8,0,0,1,8-8h128a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M80.00049,144.00048v40a8,8,0,0,0,8,8h96.41709l39.58291,32v-128a8,8,0,0,0-8-8h-40"
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
          <path
            d="M71.5834,144.00049l-39.58291,32v-128a8,8,0,0,1,8-8h128a8,8,0,0,1,8,8v88a8,8,0,0,1-8,8Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M80.00049,144.00048v40a8,8,0,0,0,8,8h96.41709l39.58291,32v-128a8,8,0,0,0-8-8h-40"
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

const Chats = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Chats.displayName = "Chats";

export default Chats;

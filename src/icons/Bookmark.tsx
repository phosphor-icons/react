/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline
            points="200 176 127.993 136 56 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M200,224l-72.0074-40L56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z"
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
          <polygon
            points="56 224 127.993 184 200 224 200 176 127.993 136 56 176 56 224"
            opacity="0.2"
          />
          <polyline
            points="200 176 127.993 136 56 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M200,224l-72.0074-40L56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z"
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
          <path d="M208.00586,176.05115V40a16.01833,16.01833,0,0,0-16-16h-128a16.01833,16.01833,0,0,0-16,16V176.05334c0,.01667-.00025.03315,0,.04981V224a7.99994,7.99994,0,0,0,11.88525,6.99316L127.999,193.15137l68.12207,37.84179A8.00006,8.00006,0,0,0,208.00586,224V176.10352C208.0061,176.08606,208.00574,176.0686,208.00586,176.05115Zm-76.12256.95569a7.9988,7.9988,0,0,0-7.77,0L64.00586,210.40332V180.707l63.99316-35.5556,64.00684,35.55578V210.4043Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="200 176 127.993 136 56 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M200,224l-72.0074-40L56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z"
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
          <polyline
            points="200 176 127.993 136 56 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M200,224l-72.0074-40L56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z"
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
            d="M200,224l-72.0074-40L56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="200 176 127.993 136 56 176"
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

const Bookmark = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Bookmark.displayName = "Bookmark";

export default Bookmark;

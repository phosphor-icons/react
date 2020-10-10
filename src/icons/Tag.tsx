/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M122.66459,25.8792,42.0101,42.0101,25.8792,122.66459a8,8,0,0,0,2.1878,7.22578L132.51977,234.34315a8,8,0,0,0,11.31371,0l90.50967-90.50967a8,8,0,0,0,0-11.31371L129.89037,28.067A8,8,0,0,0,122.66459,25.8792Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle cx="83.99414" cy="84" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
          <path
            d="M122.66459,25.8792,42.0101,42.0101,25.8792,122.66459a8,8,0,0,0,2.1878,7.22578L132.51977,234.34315a8,8,0,0,0,11.31371,0l90.50967-90.50967a8,8,0,0,0,0-11.31371L129.89037,28.067A8,8,0,0,0,122.66459,25.8792Z"
            opacity="0.2"
          />
          <path
            d="M122.66459,25.8792,42.0101,42.0101,25.8792,122.66459a8,8,0,0,0,2.1878,7.22578L132.51977,234.34315a8,8,0,0,0,11.31371,0l90.50967-90.50967a8,8,0,0,0,0-11.31371L129.89037,28.067A8,8,0,0,0,122.66459,25.8792Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="83.99414" cy="84" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M240,126.8623,135.54785,22.41016a15.95972,15.95972,0,0,0-14.45215-4.376L40.44043,34.165A8.00261,8.00261,0,0,0,34.165,40.44043L18.03418,121.0957a15.97009,15.97009,0,0,0,4.376,14.45215L126.86133,239.999a16.00006,16.00006,0,0,0,22.6289.001L239.999,149.49121A16.00007,16.00007,0,0,0,240,126.8623ZM83.99414,96a12,12,0,1,1,12-12A12,12,0,0,1,83.99414,96Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M122.66459,25.8792,42.0101,42.0101,25.8792,122.66459a8,8,0,0,0,2.1878,7.22578L132.51977,234.34315a8,8,0,0,0,11.31371,0l90.50967-90.50967a8,8,0,0,0,0-11.31371L129.89037,28.067A8,8,0,0,0,122.66459,25.8792Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle cx="83.99414" cy="84" r="9" />
        </>
      );
    case "thin":
      return (
        <>
          <path
            d="M122.66459,25.8792,42.0101,42.0101,25.8792,122.66459a8,8,0,0,0,2.1878,7.22578L132.51977,234.34315a8,8,0,0,0,11.31371,0l90.50967-90.50967a8,8,0,0,0,0-11.31371L129.89037,28.067A8,8,0,0,0,122.66459,25.8792Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle cx="83.99414" cy="84" r="6" />
        </>
      );
    case "regular":
      return (
        <>
          <path
            d="M122.66459,25.8792,42.0101,42.0101,25.8792,122.66459a8,8,0,0,0,2.1878,7.22578L132.51977,234.34315a8,8,0,0,0,11.31371,0l90.50967-90.50967a8,8,0,0,0,0-11.31371L129.89037,28.067A8,8,0,0,0,122.66459,25.8792Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="83.99414" cy="84" r="12" />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Tag = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Tag.displayName = "Tag";

export default Tag;

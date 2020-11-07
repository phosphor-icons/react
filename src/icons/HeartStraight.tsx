/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M133.65683,211.88227l81.0323-81.0322c19.9104-19.91038,22.84784-52.666,4.00583-73.59029a52.0026,52.0026,0,0,0-75.46451-2.02934L127.99994,70.46082,114.85007,57.3109C94.93972,37.40047,62.18409,34.463,41.25979,53.305a52.00261,52.00261,0,0,0-2.02934,75.46452l83.11268,83.11272A8,8,0,0,0,133.65683,211.88227Z"
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
            d="M133.65683,211.88227l81.0323-81.0322c19.9104-19.91038,22.84784-52.666,4.00583-73.59029a52.0026,52.0026,0,0,0-75.46451-2.02934L127.99994,70.46082,114.85007,57.3109C94.93972,37.40047,62.18409,34.463,41.25979,53.305a52.00261,52.00261,0,0,0-2.02934,75.46452l83.11268,83.11272A8,8,0,0,0,133.65683,211.88227Z"
            opacity="0.2"
          />
          <path
            d="M133.65683,211.88227l81.0323-81.0322c19.9104-19.91038,22.84784-52.666,4.00583-73.59029a52.0026,52.0026,0,0,0-75.46451-2.02934L127.99994,70.46082,114.85007,57.3109C94.93972,37.40047,62.18409,34.463,41.25979,53.305a52.00261,52.00261,0,0,0-2.02934,75.46452l83.11268,83.11272A8,8,0,0,0,133.65683,211.88227Z"
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
          <path d="M224.627,51.90625a59.54956,59.54956,0,0,0-43.0625-19.89063,60.69786,60.69786,0,0,0-43.98437,17.55469L128.002,59.14844l-7.5-7.49219c-23.32812-23.35156-61.29687-25.3125-84.57812-4.29687a59.974,59.974,0,0,0-2.34375,87.07031l83.10937,83.10937a16.013,16.013,0,0,0,22.625,0l81.03125-81.03125C243.68945,113.15625,245.61133,75.20312,224.627,51.90625Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M133.65683,211.88227l81.0323-81.0322c19.9104-19.91038,22.84784-52.666,4.00583-73.59029a52.0026,52.0026,0,0,0-75.46451-2.02934L127.99994,70.46082,114.85007,57.3109C94.93972,37.40047,62.18409,34.463,41.25979,53.305a52.00261,52.00261,0,0,0-2.02934,75.46452l83.11268,83.11272A8,8,0,0,0,133.65683,211.88227Z"
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
            d="M133.65683,211.88227l81.0323-81.0322c19.9104-19.91038,22.84784-52.666,4.00583-73.59029a52.0026,52.0026,0,0,0-75.46451-2.02934L127.99994,70.46082,114.85007,57.3109C94.93972,37.40047,62.18409,34.463,41.25979,53.305a52.00261,52.00261,0,0,0-2.02934,75.46452l83.11268,83.11272A8,8,0,0,0,133.65683,211.88227Z"
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
            d="M133.65683,211.88227l81.0323-81.0322c19.9104-19.91038,22.84784-52.666,4.00583-73.59029a52.0026,52.0026,0,0,0-75.46451-2.02934L127.99994,70.46082,114.85007,57.3109C94.93972,37.40047,62.18409,34.463,41.25979,53.305a52.00261,52.00261,0,0,0-2.02934,75.46452l83.11268,83.11272A8,8,0,0,0,133.65683,211.88227Z"
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

const HeartStraight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

HeartStraight.displayName = "HeartStraight";

export default HeartStraight;

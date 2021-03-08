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
          <path
            d="M128,216,88,232V200l16-16V152L24,168V136l80-40,.11255-48a24,24,0,0,1,48,0l.11255,48,80,40v32l-80-16v32L168,200v32Z"
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
            d="M128,216,88,232V200l16-16V152L24,168V136l80-40,.11255-48a24,24,0,0,1,48,0l.11255,48,80,40v32l-80-16v32L168,200v32Z"
            opacity="0.2"
          />
          <path
            d="M128,216,88,232V200l16-16V152L24,168V136l80-40,.11255-48a24,24,0,0,1,48,0l.11255,48,80,40v32l-80-16v32L168,200v32Z"
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
          <path d="M240.22559,136v32a8.00013,8.00013,0,0,1-9.56934,7.84473L160.22559,161.7583v26.96143l13.47168,13.66357A8.00119,8.00119,0,0,1,176,208v24a7.99947,7.99947,0,0,1-10.9707,7.42773L128,224.61621,90.9707,239.42773A7.99953,7.99953,0,0,1,80,232V208a8.00035,8.00035,0,0,1,2.34277-5.65674L96,188.686V161.7583L25.56934,175.84473A8.00012,8.00012,0,0,1,16,168V136a7.99967,7.99967,0,0,1,4.42188-7.15527L96.01172,91.0498l.10058-43.06835a32,32,0,0,1,64,.01855l.10157,43.0498,75.58984,37.79493A7.99969,7.99969,0,0,1,240.22559,136Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M128,216,88,232V200l16-16V152L24,168V136l80-40,.11255-48a24,24,0,0,1,48,0l.11255,48,80,40v32l-80-16v32L168,200v32Z"
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
            d="M128,216,88,232V200l16-16V152L24,168V136l80-40,.11255-48a24,24,0,0,1,48,0l.11255,48,80,40v32l-80-16v32L168,200v32Z"
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
            d="M128,216,88,232V200l16-16V152L24,168V136l80-40,.11255-48a24,24,0,0,1,48,0l.11255,48,80,40v32l-80-16v32L168,200v32Z"
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

const Airplane = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Airplane.displayName = "Airplane";

export default Airplane;

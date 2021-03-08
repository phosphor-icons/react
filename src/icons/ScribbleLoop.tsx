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
            d="M24,92.8S56,48,104,48c104,0,96,160,0,160-64,0-64-96,32-96,64,0,104,48,104,48"
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
            d="M24,92.8S56,48,104,48c104,0,96,160,0,160-64,0-64-96,32-96,64,0,104,48,104,48"
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
          <path d="M246.14551,154.87842c-1.24219-1.49072-22.92774-27.03711-59.82129-41.3501C184.21387,95.708,177.43262,79.4668,166.709,66.91113,151.6709,49.30566,129.98633,40,104,40,52.47559,40,18.89453,86.18408,17.49023,88.1499A8.00013,8.00013,0,0,0,30.50293,97.46C30.80078,97.04541,60.8125,56,104,56c21.16113,0,38.63867,7.36621,50.542,21.30273a69.15627,69.15627,0,0,1,14.69629,30.792A136.9288,136.9288,0,0,0,136,104c-26.06055,0-47.93848,6.80957-63.26758,19.69189-13.55957,11.39551-21.33691,27.27149-21.33691,43.55665a47.58841,47.58841,0,0,0,13.87207,34.05468C74.92871,210.918,88.32227,216,104,216c25.22266,0,46.68848-9.97607,62.0752-28.84961,12.21484-14.98291,19.65136-35.09668,20.79882-55.90185,29.38184,13.26708,46.73145,33.57617,46.98047,33.873a7.99987,7.99987,0,1,0,12.291-10.24316ZM104,200c-25.28613,0-36.60449-16.44922-36.60449-32.75146C67.39551,144.49219,88.86426,120,136,120a120.00113,120.00113,0,0,1,35.0293,5.27344c0,.10937.001.22021.001.32959C171.03027,162.57373,148.00586,200,104,200Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M24,92.8S56,48,104,48c104,0,96,160,0,160-64,0-64-96,32-96,64,0,104,48,104,48"
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
            d="M24,92.8S56,48,104,48c104,0,96,160,0,160-64,0-64-96,32-96,64,0,104,48,104,48"
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
            d="M24,92.8S56,48,104,48c104,0,96,160,0,160-64,0-64-96,32-96,64,0,104,48,104,48"
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

const ScribbleLoop = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ScribbleLoop.displayName = "ScribbleLoop";

export default ScribbleLoop;

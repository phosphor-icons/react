/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect x="0.00049" width="255.99951" height="256" fill="none" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="32"
            y1="128"
            x2="224"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <ellipse
            cx="128"
            cy="128"
            rx="40"
            ry="93.42294"
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
          <rect x="0.00049" width="255.99951" height="256" fill="none" />
          <circle cx="128" cy="128" r="96" opacity="0.2" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <line
            x1="32"
            y1="128"
            x2="224"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <ellipse
            cx="128"
            cy="128"
            rx="40"
            ry="93.42294"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
        </>
      );
    case "fill":
      return (
        <>
          <rect x="0.00049" width="255.99951" height="256" fill="none" />
          <g>
            <path d="M96.37207,135.99963c1.81152,28.7522,13.17871,55.71,31.62793,74.44532,18.44922-18.73535,29.81641-45.69312,31.62793-74.44532Z" />
            <path d="M159.62793,119.99939C157.81641,91.24744,146.44922,64.28967,128,45.55432c-18.44922,18.73535-29.81641,45.69312-31.62793,74.44507Z" />
            <path d="M175.60449,119.99939h55.98926a104.0692,104.0692,0,0,0-103.55566-95.9978L133.25,28.54651C158.56738,50.61,173.64062,83.63025,175.60449,119.99939Z" />
            <path d="M122.75,28.54651l5.21191-4.54492a104.06919,104.06919,0,0,0-103.55566,95.9978H80.39551C82.35937,83.63025,97.43262,50.61,122.75,28.54651Z" />
            <path d="M80.396,135.99988l-55.98975-.00025a104.06922,104.06922,0,0,0,103.55566,95.99805L122.75,227.45276C97.43262,205.38928,82.35937,172.369,80.396,135.99988Z" />
            <path d="M133.25,227.45276l-5.21191,4.54492a104.06873,104.06873,0,0,0,103.55517-95.9978l-55.98877-.00025C173.64062,172.369,158.56738,205.38928,133.25,227.45276Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <rect x="0.00049" width="255.99951" height="256" fill="none" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="32"
            y1="128"
            x2="224"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <ellipse
            cx="128"
            cy="128"
            rx="40"
            ry="93.42294"
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
          <rect x="0.00049" width="255.99951" height="256" fill="none" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="32"
            y1="128"
            x2="224"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <ellipse
            cx="128"
            cy="128"
            rx="40"
            ry="93.42294"
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
          <rect x="0.00049" width="255.99951" height="256" fill="none" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <line
            x1="32"
            y1="128"
            x2="224"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <ellipse
            cx="128"
            cy="128"
            rx="40"
            ry="93.42294"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
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

const GlobeSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

GlobeSimple.displayName = "GlobeSimple";

export default GlobeSimple;

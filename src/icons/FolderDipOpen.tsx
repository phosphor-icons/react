/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M32,208l29.98845-74.97113A8,8,0,0,1,69.41626,128h48.16153a8,8,0,0,0,4.43761-1.3436l19.9692-13.3128A8,8,0,0,1,146.42221,112h82.47838a8,8,0,0,1,7.58947,10.52982L208,208Z"
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
            d="M69.416,128h48.16162a8.00257,8.00257,0,0,0,4.438-1.34375l19.96876-13.3125A8.00257,8.00257,0,0,1,146.42236,112H208V88a7.99977,7.99977,0,0,0-8-8H130.6665a7.9995,7.9995,0,0,1-4.7998-1.6001L98.1333,57.6001A7.9995,7.9995,0,0,0,93.3335,56H40a7.99977,7.99977,0,0,0-8,8V208l29.98828-74.97119A8.00025,8.00025,0,0,1,69.416,128Z"
            opacity="0.2"
          />
          <path
            d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,208l29.98845-74.97113A8,8,0,0,1,69.41626,128h48.16153a8,8,0,0,0,4.43761-1.3436l19.9692-13.3128A8,8,0,0,1,146.42221,112h82.47838a8,8,0,0,1,7.58947,10.52982L208,208Z"
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
          <path d="M241.88037,110.64453A16.03934,16.03934,0,0,0,228.90039,104H146.42188a15.9479,15.9479,0,0,0-8.875,2.6875L117.57812,120H69.416a15.92344,15.92344,0,0,0-14.85547,10.05762L24.57227,205.02881A8.00009,8.00009,0,0,0,32,216H208a8.00117,8.00117,0,0,0,7.58984-5.47021l28.48926-85.47022A16.03873,16.03873,0,0,0,241.88037,110.64453Z" />
          <path d="M39.70508,124.11572A31.84637,31.84637,0,0,1,69.416,104h43.31787l15.9375-10.625A31.899,31.899,0,0,1,146.42188,88H216a16.01833,16.01833,0,0,0-16-16H130.667l-27.7334-20.7998A16.10323,16.10323,0,0,0,93.333,48H40A16.01833,16.01833,0,0,0,24,64v99.37842Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M32,208l29.98845-74.97113A8,8,0,0,1,69.41626,128h48.16153a8,8,0,0,0,4.43761-1.3436l19.9692-13.3128A8,8,0,0,1,146.42221,112h82.47838a8,8,0,0,1,7.58947,10.52982L208,208Z"
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
            d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M32,208l29.98845-74.97113A8,8,0,0,1,69.41626,128h48.16153a8,8,0,0,0,4.43761-1.3436l19.9692-13.3128A8,8,0,0,1,146.42221,112h82.47838a8,8,0,0,1,7.58947,10.52982L208,208Z"
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
            d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,208l29.98845-74.97113A8,8,0,0,1,69.41626,128h48.16153a8,8,0,0,0,4.43761-1.3436l19.9692-13.3128A8,8,0,0,1,146.42221,112h82.47838a8,8,0,0,1,7.58947,10.52982L208,208Z"
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

const FolderDipOpen = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

FolderDipOpen.displayName = "FolderDipOpen";

export default FolderDipOpen;

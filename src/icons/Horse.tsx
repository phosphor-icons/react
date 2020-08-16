/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="128.00054" cy="104.00074" r="16" />
          <path
            d="M176,120a48,48,0,0,1-48,48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="128"
            y1="168"
            x2="92.76585"
            y2="217.32781"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M128.00019,167.99979C88,144,39.07936,160.001,39.07854,160L16,128,120,64V32h8A96,96,0,1,1,63.99958,199.555"
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
          <g>
            <circle cx="123.99977" cy="100" r="12" />
            <path
              d="M176,120a48,48,0,0,1-48,48"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              x1="128"
              y1="168"
              x2="92.76585"
              y2="217.32781"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M128.00019,167.99979C88,144,39.07936,160.001,39.07854,160h.00082L16,128,120,64V32h8A96,96,0,1,1,92.76618,217.32808l-.00033-.00027L128,168Z"
              opacity="0.2"
            />
            <path
              d="M128.00019,167.99979C88,144,39.07936,160.001,39.07854,160h.00082L16,128,120,64V32h8A96,96,0,1,1,63.99958,199.555"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </g>
        </>
      );
    case "fill":
      return (
        <>
          <g>
            <path d="M128,24h-8a7.99539,7.99539,0,0,0-8,8V59.53125L11.8125,121.1875a7.99074,7.99074,0,0,0-2.29688,11.49219l23.07813,32a8.02851,8.02851,0,0,0,8.95313,2.92968c.43554-.1455,39.88574-12.52539,74.58984,3.2295L90.23633,207.09863a87.63151,87.63151,0,0,1-20.90821-13.50488,7.9951,7.9951,0,0,0-10.65624,11.92187,103.58481,103.58481,0,0,0,29.38085,18.25977c.02344.0166.03321.044.05665.06055.05957.042.13476.02246.19433.0625A103.90886,103.90886,0,1,0,128,24Zm-4,88a12,12,0,1,1,12-12A12,12,0,0,1,124,112Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <g>
            <circle cx="123.99977" cy="100" r="9" />
            <path
              d="M176,120a48,48,0,0,1-48,48"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            />
            <line
              x1="128"
              y1="168"
              x2="92.76585"
              y2="217.32781"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            />
            <path
              d="M128.00019,167.99979C88,144,39.07936,160.001,39.07854,160h.00082L16,128,120,64V32h8A96,96,0,1,1,63.99958,199.555"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            />
          </g>
        </>
      );
    case "thin":
      return (
        <>
          <g>
            <circle cx="123.99977" cy="100" r="6" />
            <path
              d="M176,120a48,48,0,0,1-48,48"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            />
            <line
              x1="128"
              y1="168"
              x2="92.76585"
              y2="217.32781"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            />
            <path
              d="M128.00019,167.99979C88,144,39.07936,160.001,39.07854,160h.00082L16,128,120,64V32h8A96,96,0,1,1,63.99958,199.555"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            />
          </g>
        </>
      );
    case "regular":
      return (
        <>
          <g>
            <circle cx="123.99977" cy="100" r="12" />
            <path
              d="M176,120a48,48,0,0,1-48,48"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              x1="128"
              y1="168"
              x2="92.76585"
              y2="217.32781"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M128.00019,167.99979C88,144,39.07936,160.001,39.07854,160h.00082L16,128,120,64V32h8A96,96,0,1,1,63.99958,199.555"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </g>
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Horse = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Horse.displayName = "Horse";

export default Horse;

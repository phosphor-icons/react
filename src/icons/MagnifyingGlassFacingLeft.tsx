/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <g>
            <rect
              width="256.00098"
              height="256.00098"
              transform="translate(256.00098 256.00098) rotate(180)"
              fill="none"
            />
            <g>
              <circle
                cx="120"
                cy="120"
                r="79.98664"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              />
              <line
                x1="176.56643"
                y1="176.56594"
                x2="216.00098"
                y2="216.00049"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              />
            </g>
          </g>
        </>
      );
    case "duotone":
      return (
        <>
          <g>
            <rect
              width="256.00098"
              height="256.00098"
              transform="translate(256.00098 256.00098) rotate(180)"
              fill="none"
            />
            <g>
              <circle
                cx="120"
                cy="120"
                r="79.98664"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <circle cx="120" cy="120" r="79.98664" opacity="0.2" />
              <line
                x1="176.56643"
                y1="176.56594"
                x2="216.00098"
                y2="216.00049"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </g>
          </g>
        </>
      );
    case "fill":
      return (
        <>
          <g>
            <rect
              width="256.00098"
              height="256.00098"
              transform="translate(256.00098 256.00098) rotate(180)"
              fill="none"
            />
            <path d="M227.30859,204.6875l-35.03613-35.0498c18.51856-27.083,21.3916-63.36915,3.92676-93.62989a87.95127,87.95127,0,1,0-32.20313,120.19532c2.02735-1.1709,3.67578-2.71387,5.57325-4.01856l35.11425,35.12793a15.99829,15.99829,0,0,0,22.625-22.625ZM78.44238,143.99316A47.94958,47.94958,0,1,1,120.0752,168,48.04017,48.04017,0,0,1,78.44238,143.99316Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <g>
            <rect
              width="256.00098"
              height="256.00098"
              transform="translate(256.00098 256.00098) rotate(180)"
              fill="none"
            />
            <g>
              <circle
                cx="120"
                cy="120"
                r="79.98664"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
              />
              <line
                x1="176.56643"
                y1="176.56594"
                x2="216.00098"
                y2="216.00049"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
              />
            </g>
          </g>
        </>
      );
    case "thin":
      return (
        <>
          <g>
            <rect
              width="256.00098"
              height="256.00098"
              transform="translate(256.00098 256.00098) rotate(180)"
              fill="none"
            />
            <g>
              <circle
                cx="120"
                cy="120"
                r="79.98664"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              />
              <line
                x1="176.56643"
                y1="176.56594"
                x2="216.00098"
                y2="216.00049"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              />
            </g>
          </g>
        </>
      );
    case "regular":
      return (
        <>
          <g>
            <rect
              width="256.00098"
              height="256.00098"
              transform="translate(256.00098 256.00098) rotate(180)"
              fill="none"
            />
            <g>
              <circle
                cx="120"
                cy="120"
                r="79.98664"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="176.56643"
                y1="176.56594"
                x2="216.00098"
                y2="216.00049"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </g>
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

const MagnifyingGlassFacingLeft = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
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
  }
);

MagnifyingGlassFacingLeft.displayName = "MagnifyingGlassFacingLeft";

export default MagnifyingGlassFacingLeft;

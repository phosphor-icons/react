/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M210.25072,35.878,23.923,88.432a8,8,0,0,0-1.253,14.9295l85.61084,40.5525a8.00008,8.00008,0,0,1,3.80521,3.80521L152.63852,233.33a8,8,0,0,0,14.9295-1.253L220.122,45.74928A8,8,0,0,0,210.25072,35.878Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="110.86292"
            y1="145.13708"
            x2="156.11775"
            y2="99.88225"
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
            d="M210.25072,35.878,23.923,88.432a8,8,0,0,0-1.253,14.9295l85.61084,40.5525a8.00008,8.00008,0,0,1,3.80521,3.80521L152.63852,233.33a8,8,0,0,0,14.9295-1.253L220.122,45.74928A8,8,0,0,0,210.25072,35.878Z"
            opacity="0.2"
          />
          <path
            d="M210.25072,35.878,23.923,88.432a8,8,0,0,0-1.253,14.9295l85.61084,40.5525a8.00008,8.00008,0,0,1,3.80521,3.80521L152.63852,233.33a8,8,0,0,0,14.9295-1.253L220.122,45.74928A8,8,0,0,0,210.25072,35.878Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="110.86292"
            y1="145.13708"
            x2="156.11775"
            y2="99.88225"
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
          <path d="M223.73633,32.26367a16.01051,16.01051,0,0,0-15.65723-4.085L21.751,80.73242a15.9995,15.9995,0,0,0-2.50586,29.8584l77.93359,36.916,53.28223-53.28223a8.00052,8.00052,0,0,1,11.31445,11.31445l-53.28223,53.28223,36.916,77.93359a15.85235,15.85235,0,0,0,14.41406,9.15235q.687,0,1.38379-.05762A15.86994,15.86994,0,0,0,175.26758,234.249L227.82129,47.9209A16.0173,16.0173,0,0,0,223.73633,32.26367Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M210.25072,35.878,23.923,88.432a8,8,0,0,0-1.253,14.9295l85.61084,40.5525a8.00008,8.00008,0,0,1,3.80521,3.80521L152.63852,233.33a8,8,0,0,0,14.9295-1.253L220.122,45.74928A8,8,0,0,0,210.25072,35.878Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="110.86292"
            y1="145.13708"
            x2="156.11775"
            y2="99.88225"
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
            d="M210.25072,35.878,23.923,88.432a8,8,0,0,0-1.253,14.9295l85.61084,40.5525a8.00008,8.00008,0,0,1,3.80521,3.80521L152.63852,233.33a8,8,0,0,0,14.9295-1.253L220.122,45.74928A8,8,0,0,0,210.25072,35.878Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="110.86292"
            y1="145.13708"
            x2="156.11775"
            y2="99.88225"
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
            d="M210.25072,35.878,23.923,88.432a8,8,0,0,0-1.253,14.9295l85.61084,40.5525a8.00008,8.00008,0,0,1,3.80521,3.80521L152.63852,233.33a8,8,0,0,0,14.9295-1.253L220.122,45.74928A8,8,0,0,0,210.25072,35.878Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="110.86292"
            y1="145.13708"
            x2="156.11775"
            y2="99.88225"
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

const PaperPlaneTilt = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

PaperPlaneTilt.displayName = "PaperPlaneTilt";

export default PaperPlaneTilt;

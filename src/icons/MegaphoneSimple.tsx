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
            d="M31.99414,50.66667V189.33333a8,8,0,0,0,10.24,7.68l176-51.33333a8,8,0,0,0,5.76-7.68V102a8,8,0,0,0-5.76-7.68l-176-51.33333A8,8,0,0,0,31.99414,50.66667Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M184,155.665V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.335"
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
            d="M42.23414,42.98667a8,8,0,0,0-10.24,7.68V189.33333a8,8,0,0,0,10.24,7.68L136,169.665V70.335Z"
            opacity="0.2"
          />
          <path
            d="M31.99414,50.66667V189.33333a8,8,0,0,0,10.24,7.68l176-51.33333a8,8,0,0,0,5.76-7.68V102a8,8,0,0,0-5.76-7.68l-176-51.33333A8,8,0,0,0,31.99414,50.66667Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M184,155.665V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.335"
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
          <path d="M220.47461,86.64062,138.395,62.70068l-.05127-.01513L44.47363,35.30664A15.99966,15.99966,0,0,0,23.99414,50.667V189.333A16.0247,16.0247,0,0,0,39.94922,205.3457a16.16154,16.16154,0,0,0,4.52539-.65234L128,180.332V192a16.01833,16.01833,0,0,0,16,16h32a16.01833,16.01833,0,0,0,16-16V161.665l28.47363-8.30469A16.0825,16.0825,0,0,0,231.99414,138V102A16.08075,16.08075,0,0,0,220.47461,86.64062ZM176,192H144V175.665l32-9.333Zm39.99414-54-34.35352,10.01953-.02832.0083L144,158.99805V81.00146L215.99414,102Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M31.99414,50.66667V189.33333a8,8,0,0,0,10.24,7.68l176-51.33333a8,8,0,0,0,5.76-7.68V102a8,8,0,0,0-5.76-7.68l-176-51.33333A8,8,0,0,0,31.99414,50.66667Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M184,155.665V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.335"
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
            d="M31.99414,50.66667V189.33333a8,8,0,0,0,10.24,7.68l176-51.33333a8,8,0,0,0,5.76-7.68V102a8,8,0,0,0-5.76-7.68l-176-51.33333A8,8,0,0,0,31.99414,50.66667Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M184,155.665V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.335"
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
            d="M31.99414,50.66667V189.33333a8,8,0,0,0,10.24,7.68l176-51.33333a8,8,0,0,0,5.76-7.68V102a8,8,0,0,0-5.76-7.68l-176-51.33333A8,8,0,0,0,31.99414,50.66667Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M184,155.665V192a8,8,0,0,1-8,8H144a8,8,0,0,1-8-8V70.335"
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

const MegaphoneSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

MegaphoneSimple.displayName = "MegaphoneSimple";

export default MegaphoneSimple;

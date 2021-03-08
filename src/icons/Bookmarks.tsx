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
            d="M160,224l-52.0074-40L56,224V80a8,8,0,0,1,8-8h88a8,8,0,0,1,8,8Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M88,72V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V184l-40-30.76487"
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
            d="M192,32H96a7.99993,7.99993,0,0,0-8,8V64h72a7.99993,7.99993,0,0,1,8,8v97.146L200,192V40A7.99993,7.99993,0,0,0,192,32Z"
            opacity="0.2"
          />
          <path
            d="M168,224l-56.0074-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M88,64V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V192l-32-22.85412"
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
          <path d="M192,24H96A16.01833,16.01833,0,0,0,80,40V56H64A16.01833,16.01833,0,0,0,48,72V224a8.00026,8.00026,0,0,0,12.65039,6.50977l51.34277-36.67872,51.35743,36.67872A7.99952,7.99952,0,0,0,176,224V184.6897l19.35059,13.82007A7.99952,7.99952,0,0,0,208,192V40A16.01833,16.01833,0,0,0,192,24Zm0,152.45508-16-11.42676V72a16.01833,16.01833,0,0,0-16-16H96V40h96Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M168,224l-56.0074-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M88,64V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V192l-32-22.85412"
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
            d="M168,224l-56.0074-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M88,64V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V192l-32-22.85412"
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
            d="M168,224l-56.0074-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M88,64V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V192l-32-22.85412"
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

const Bookmarks = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Bookmarks.displayName = "Bookmarks";

export default Bookmarks;

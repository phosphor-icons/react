/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line
            x1="80"
            y1="127.99219"
            x2="176"
            y2="127.99219"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M103.07692,183.99219h-32c-30.41814,0-55.07692-25.07206-55.07692-56s24.65878-56,55.07692-56h32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M152.92308,183.99219h32c30.41814,0,55.07692-25.07206,55.07692-56s-24.65878-56-55.07692-56h-32"
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
          <line
            x1="80"
            y1="127.99219"
            x2="176"
            y2="127.99219"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M103.07692,183.99219h-32c-30.41814,0-55.07692-25.07206-55.07692-56s24.65878-56,55.07692-56h32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M152.92308,183.99219h32c30.41814,0,55.07692-25.07206,55.07692-56s-24.65878-56-55.07692-56h-32"
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
          <line
            x1="80"
            y1="127.99219"
            x2="176"
            y2="127.99219"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M103.07692,183.99219h-32c-30.41814,0-55.07692-25.07206-55.07692-56s24.65878-56,55.07692-56h32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M152.92308,183.99219h32c30.41814,0,55.07692-25.07206,55.07692-56s-24.65878-56-55.07692-56h-32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="80"
            y1="127.99219"
            x2="176"
            y2="127.99219"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M103.07692,183.99219h-32c-30.41814,0-55.07692-25.07206-55.07692-56s24.65878-56,55.07692-56h32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M152.92308,183.99219h32c30.41814,0,55.07692-25.07206,55.07692-56s-24.65878-56-55.07692-56h-32"
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
          <line
            x1="80"
            y1="127.99219"
            x2="176"
            y2="127.99219"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M103.07692,183.99219h-32c-30.41814,0-55.07692-25.07206-55.07692-56s24.65878-56,55.07692-56h32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M152.92308,183.99219h32c30.41814,0,55.07692-25.07206,55.07692-56s-24.65878-56-55.07692-56h-32"
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
          <line
            x1="80"
            y1="127.99219"
            x2="176"
            y2="127.99219"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M103.07692,183.99219h-32c-30.41814,0-55.07692-25.07206-55.07692-56s24.65878-56,55.07692-56h32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M152.92308,183.99219h32c30.41814,0,55.07692-25.07206,55.07692-56s-24.65878-56-55.07692-56h-32"
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

const Link = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Link.displayName = "Link";

export default Link;

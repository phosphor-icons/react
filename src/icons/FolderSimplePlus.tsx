/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <path d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="104" y1="144" x2="152" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="128" y1="120" x2="128" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z" opacity="0.2"/>
  <path d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="103.99414" y1="144" x2="151.99414" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="127.99414" y1="120" x2="127.99414" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M215.99512,71.99805H130.667l-27.75-20.80469a16.07363,16.07363,0,0,0-9.57812-3.19531H39.99512a16.01581,16.01581,0,0,0-16,16v136a16.01582,16.01582,0,0,0,16,16H216.88574a15.13062,15.13062,0,0,0,15.10938-15.10938V87.99805A16.01582,16.01582,0,0,0,215.99512,71.99805ZM152,152H136v16a8,8,0,0,1-16,0V152H104a8,8,0,0,1,0-16h16V120a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Z"/>

</>)
    case "light":
      return (<>
  <path d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="104" y1="144" x2="152" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="128" y1="120" x2="128" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <path d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="104" y1="144" x2="152" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="128" y1="120" x2="128" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <path d="M224,88V200.88889A7.11111,7.11111,0,0,1,216.88889,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="104" y1="144" x2="152" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="120" x2="128" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const FolderSimplePlus = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

FolderSimplePlus.displayName = "FolderSimplePlus";

export default FolderSimplePlus;

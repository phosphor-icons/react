/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <line x1="40" y1="216.00452" x2="40" y2="48.00452" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M39.99951,168.00452c64-48,112,48,176,0v-120c-64,48-112-48-176,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M39.99951,168.00452c64-48,112,48,176,0v-120c-64,48-112-48-176,0Z" opacity="0.2"/>
  <line x1="40" y1="216.00452" x2="40" y2="48.00452" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M39.99951,168.00452c64-48,112,48,176,0v-120c-64,48-112-48-176,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M219.57764,40.84924a7.99605,7.99605,0,0,0-8.37793.75489c-28.29981,21.22558-52.28223,10.94726-80.04883-.95313-28.24414-12.10449-60.25488-25.81934-95.95117.95313-.04737.0354-.08838.07568-.13428.11181-.11084.08692-.21777.17676-.32373.26929-.09912.08667-.19727.17407-.291.26465-.0874.08423-.17138.17138-.25488.25952-.1001.10547-.19873.21142-.292.32129-.0708.08349-.1377.16968-.20508.25586-.09277.11865-.18457.23779-.26953.36084-.06348.09082-.12158.18457-.18115.27807-.07715.12232-.1543.24439-.22461.37036-.06006.10694-.11475.217-.16992.32715-.05811.1167-.11719.23291-.16944.35181-.05566.126-.105.25513-.15429.38428-.04151.10913-.0835.218-.12012.32861-.04541.137-.084.27661-.12207.417-.03028.11084-.06055.22119-.08594.33325-.03027.13526-.05518.27271-.07861.41065-.02149.12524-.042.25024-.05762.37646-.01514.12427-.02588.24927-.03564.37525-.01075.14575-.01856.2915-.022.43774-.001.05615-.0083.11035-.0083.16651v168a8,8,0,0,0,16,0V172.13879c26.92334-18.16259,50.13623-8.22973,76.84863,3.21924,16.26368,6.96973,33.7754,14.47559,52.52247,14.47461,13.80859,0,28.2871-4.07226,43.42871-15.42773a8.00094,8.00094,0,0,0,3.20019-6.40039v-120A8.00023,8.00023,0,0,0,219.57764,40.84924Z"/>

</>)
    case "light":
      return (<>
  <line x1="40" y1="216.00452" x2="40" y2="48.00452" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M39.99951,168.00452c64-48,112,48,176,0v-120c-64,48-112-48-176,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <line x1="40" y1="216.00452" x2="40" y2="48.00452" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M39.99951,168.00452c64-48,112,48,176,0v-120c-64,48-112-48-176,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <line x1="40" y1="216.00452" x2="40" y2="48.00452" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M39.99951,168.00452c64-48,112,48,176,0v-120c-64,48-112-48-176,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Flag = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Flag.displayName = "Flag";

export default Flag;
